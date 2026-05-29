# Sleepyfish Blog

Sleepyfish 的个人博客，基于 Astro 和 Fuwari 改造，用来记录学习、科研、工具和生活碎片。个性签名是 `Own the moment`，首页浏览器标签标题是 `Own the moment - fish's space`。

正式站点计划部署到：

- `https://www.sleepyfish2031.top/`
- `https://sleepyfish2031.top/` 跳转到 `www`

## 本地使用

```bash
pnpm install
pnpm dev
```

常用命令：

| Command | Action |
| --- | --- |
| `pnpm dev` | 启动本地预览，默认 `http://localhost:4321` |
| `pnpm check` | 运行 Astro 类型和内容检查 |
| `pnpm build` | 构建生产版本到 `dist/`，并生成 Pagefind 搜索索引 |
| `pnpm preview` | 本地预览生产构建 |
| `pnpm new-post "分类/文章名"` | 创建一篇新文章 |

## 如何写新文章

新文章放在 `src/content/posts/<分类>/<文章名>.md`。推荐用命令创建：

```bash
pnpm new-post "课程笔记/第一篇笔记"
```

文章开头需要包含 Frontmatter：

```md
---
title: 第一篇笔记
published: 2026-05-29
description: 这篇文章的简短介绍
tags: [学习, 工具]
category: 课程笔记
draft: false
image: ''
---
```

推荐分类：

- `课程笔记`: 课堂、考试、语言学习和复习材料
- `科研`: 文献、实验、想法和阶段总结
- `工具`: Git、AI、软件配置和踩坑记录
- `读书`: 读书摘录和思考
- `随笔`: 日常记录和临时想法

草稿文章设置 `draft: true`。准备发布时改成 `draft: false`，再提交并推送。

## 个性化内容在哪里改

- 站点标题、简介、导航：`src/config.ts`
- About 页面：`src/content/spec/about.md`
- 标签页图标：当前使用 `public/favicon/favicon.png`
- 头像：当前使用 `src/assets/images/avatar.png`
- 横幅：当前使用 `src/assets/images/banner.png`，亮色和暗色模式共用同一张
- Favicon：之后可替换 `public/favicon/favicon.png`

## 部署

Vercel 是正式部署来源；GitHub Actions 保留为检查。

Vercel 项目设置：

- Framework Preset: `Astro`
- Install Command: `pnpm install --frozen-lockfile`
- Build Command: `pnpm build`
- Output Directory: `dist`

域名设置：

1. 在 Porkbun 购买 `sleepyfish2031.top`
2. 在 Vercel 项目中添加 `www.sleepyfish2031.top`
3. 添加 `sleepyfish2031.top`，设置跳转到 `www.sleepyfish2031.top`
4. 推荐使用 Vercel Nameservers；也可以继续用 Porkbun DNS，并按 Vercel 提示添加 DNS 记录

## Credit

This blog is based on [Fuwari](https://github.com/saicaca/fuwari), built with [Astro](https://astro.build).

The original Fuwari license is preserved in `LICENSE`.
