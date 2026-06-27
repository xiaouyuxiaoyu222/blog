import { existsSync } from "node:fs";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const postsDir = path.join(projectRoot, "src", "content", "posts");

const repo = process.env.CONTENT_SYNC_REPO ?? "xiaouyuxiaoyu222/blog";
const ref =
	process.env.CONTENT_SYNC_REF ??
	process.env.VERCEL_GIT_COMMIT_REF ??
	process.env.GITHUB_REF_NAME ??
	"main";
const minPostCount = Number(process.env.CONTENT_SYNC_MIN_POSTS ?? 10);
const refreshExisting =
	process.env.CONTENT_SYNC_REFRESH_EXISTING === "true" ||
	process.env.VERCEL === "1";

async function listMarkdownFiles(dir) {
	if (!existsSync(dir)) return [];

	const entries = await readdir(dir, { withFileTypes: true });
	const nested = await Promise.all(
		entries.map(async (entry) => {
			const fullPath = path.join(dir, entry.name);
			if (entry.isDirectory()) return listMarkdownFiles(fullPath);
			return entry.isFile() && entry.name.endsWith(".md") ? [fullPath] : [];
		}),
	);

	return nested.flat();
}

function toPosix(relativePath) {
	return relativePath.split(path.sep).join("/");
}

function rawUrlFor(remotePath) {
	const encodedPath = remotePath.split("/").map(encodeURIComponent).join("/");
	return `https://raw.githubusercontent.com/${repo}/${ref}/${encodedPath}`;
}

async function fetchJson(url) {
	const response = await fetch(url, {
		headers: {
			accept: "application/vnd.github+json",
			"user-agent": "sleepyfish-blog-content-sync",
		},
	});
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}
	return response.json();
}

async function fetchText(url) {
	const response = await fetch(url, {
		headers: { "user-agent": "sleepyfish-blog-content-sync" },
	});
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}
	return response.text();
}

export async function syncMissingRemotePosts() {
	const localBefore = await listMarkdownFiles(postsDir);
	const localPaths = new Set(
		localBefore.map((file) => toPosix(path.relative(projectRoot, file))),
	);

	let remotePostPaths = [];
	try {
		const treeUrl = `https://api.github.com/repos/${repo}/git/trees/${encodeURIComponent(ref)}?recursive=1`;
		const tree = await fetchJson(treeUrl);
		remotePostPaths = tree.tree
			.filter(
				(item) =>
					item.type === "blob" &&
					item.path.startsWith("src/content/posts/") &&
					item.path.endsWith(".md"),
			)
			.map((item) => item.path)
			.sort();
	} catch (error) {
		console.warn(
			`[content-sync] Could not read remote post tree from ${repo}@${ref}: ${error.message}`,
		);
	}

	let synced = 0;
	for (const remotePath of remotePostPaths) {
		if (localPaths.has(remotePath) && !refreshExisting) continue;

		const targetPath = path.join(projectRoot, ...remotePath.split("/"));
		const content = await fetchText(rawUrlFor(remotePath));
		await mkdir(path.dirname(targetPath), { recursive: true });
		await writeFile(targetPath, content);
		synced += 1;
	}

	const localAfter = await listMarkdownFiles(postsDir);
	const expectedCount = remotePostPaths.length || minPostCount;
	if (localAfter.length < expectedCount) {
		throw new Error(
			`Only found ${localAfter.length} post files, expected at least ${expectedCount}. Refusing to build an incomplete site.`,
		);
	}

	console.log(
		`[content-sync] ${localAfter.length} post files ready (${synced} synced from ${repo}@${ref}).`,
	);
}

const isCliEntrypoint =
	process.argv[1] &&
	path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isCliEntrypoint) {
	await syncMissingRemotePosts();
}
