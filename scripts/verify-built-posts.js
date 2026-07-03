import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const distPostsDir = path.join(distDir, "posts");
const localPostsDir = path.join(projectRoot, "src", "content", "posts");

const repo = process.env.CONTENT_SYNC_REPO ?? "xiaouyuxiaoyu222/blog";
const ref =
	process.env.CONTENT_SYNC_REF ??
	process.env.VERCEL_GIT_COMMIT_REF ??
	process.env.GITHUB_REF_NAME ??
	"main";

async function listFiles(dir, predicate) {
	if (!existsSync(dir)) return [];

	const entries = await readdir(dir, { withFileTypes: true });
	const nested = await Promise.all(
		entries.map(async (entry) => {
			const fullPath = path.join(dir, entry.name);
			if (entry.isDirectory()) return listFiles(fullPath, predicate);
			return entry.isFile() && predicate(fullPath) ? [fullPath] : [];
		}),
	);

	return nested.flat();
}

async function fetchJson(url) {
	const response = await fetch(url, {
		headers: {
			accept: "application/vnd.github+json",
			"user-agent": "sleepyfish-blog-build-verify",
		},
	});
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}
	return response.json();
}

function countMatches(text, pattern) {
	return [...text.matchAll(pattern)].length;
}

const treeUrl = `https://api.github.com/repos/${repo}/git/trees/${encodeURIComponent(ref)}?recursive=1`;
const tree = await fetchJson(treeUrl);
const remotePostPaths = tree.tree
	.filter(
		(item) =>
			item.type === "blob" &&
			item.path.startsWith("src/content/posts/") &&
			item.path.endsWith(".md"),
	)
	.map((item) => item.path);
const remoteCoursePostCount = remotePostPaths.filter((item) =>
	item.startsWith("src/content/posts/课程笔记/"),
).length;

const localPostCount = (
	await listFiles(localPostsDir, (file) => file.endsWith(".md"))
).length;
const builtPostCount = (
	await listFiles(distPostsDir, (file) => path.basename(file) === "index.html")
).length;

const coursesHtml = await readFile(
	path.join(distDir, "courses", "index.html"),
	"utf8",
);
const sitemapHtml = await readFile(path.join(distDir, "sitemap-0.xml"), "utf8");

const courseTitleCount = countMatches(
	coursesHtml,
	/&quot;title&quot;:\[0,&quot;/g,
);
const sitemapLocCount = countMatches(sitemapHtml, /<loc>[^<]+<\/loc>/g);

const failures = [];
if (localPostCount < remotePostPaths.length) {
	failures.push(
		`local source has ${localPostCount} posts, remote ${repo}@${ref} has ${remotePostPaths.length}`,
	);
}
if (builtPostCount < remotePostPaths.length) {
	failures.push(
		`dist/posts has ${builtPostCount} built posts, expected at least ${remotePostPaths.length}`,
	);
}
if (courseTitleCount < remoteCoursePostCount) {
	failures.push(
		`courses page has ${courseTitleCount} course posts, expected at least ${remoteCoursePostCount}`,
	);
}
if (sitemapLocCount < remotePostPaths.length) {
	failures.push(
		`sitemap has ${sitemapLocCount} URLs, expected at least ${remotePostPaths.length}`,
	);
}

if (failures.length > 0) {
	throw new Error(`Incomplete build output:\n- ${failures.join("\n- ")}`);
}

console.log(
	`[content-verify] ${builtPostCount} built posts, ${courseTitleCount} course posts, ${sitemapLocCount} sitemap URLs verified against ${remotePostPaths.length} remote posts.`,
);
