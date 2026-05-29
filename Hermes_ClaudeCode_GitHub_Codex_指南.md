# 小王指南

> 让小王顺利掌握 **git** ， **github** ，**代理**，**Hermes Agent** ，**Claude Code**，（接入**DeepSeek API**） 以及 **Codex** 的基础使用方法。

---

## 第一部分：Git 与 GitHub 入门

### Git 和 GitHub 分别是什么

Git 是一个版本控制系统，可以记录每一次你文件夹里的内容修改，方便你回溯找回，管理文件夹；

GitHub 是一个在线平台，提供 Git 仓库托管、协作和代码审查功能，是一个存放你的git管理的文件夹的地方。

- **Repository** ：一个由 Git 管理的项目文件夹
- **Commit**：一次提交，相当于一个存档点
- **Branch**：从主线分出的独立修改路线，相当于一个分支
- **Push**：将本地提交上传到 GitHub
- **Pull**：把 GitHub 上的新提交同步到本地
- **Pull Request**：请求把一个分支的改动合并进主分支

### 配置 Git 身份

将下方名字和邮箱替换为你自己的 GitHub 信息：

```bash
git config --global user.name "你的GitHub用户名或姓名"
git config --global user.email "你的GitHub邮箱"
git config --global init.defaultBranch main
```

查看是否设置成功：

```bash
git config --global --list
```


### 23. 安装并登录 GitHub CLI

GitHub CLI 的命令名称是 `gh`，它可以帮助你在终端登录 GitHub、克隆仓库、创建 PR。

安装：

```bash
brew install gh
```

登录：

```bash
gh auth login
```

推荐按提示选择：

```text
GitHub.com
HTTPS
Login with a web browser
```

浏览器会打开登录授权页面，完成授权即可。

检查登录状态：

```bash
gh auth status
```

---

## 24. 最基础的 Git 工作流：下载已有项目并修改

### 24.1 从 GitHub 克隆项目

假设项目地址对应 `username/repository-name`：

```bash
cd ~/Projects
gh repo clone username/repository-name
cd repository-name
```

查看状态：

```bash
git status
```

### 24.2 创建自己的修改分支

```bash
git switch -c feature/describe-your-change
```

示例：

```bash
git switch -c feature/add-homepage-intro
```

### 24.3 修改完成后查看差异

```bash
git status
git diff
```

### 24.4 保存一次清晰的版本

```bash
git add 修改过的文件名
git commit -m "feat: add homepage introduction"
```

### 24.5 上传到 GitHub

```bash
git push -u origin feature/add-homepage-intro
```

### 24.6 发起 Pull Request

```bash
gh pr create --web
```

浏览器会打开页面，让你填写这次修改的说明并提交审查。

---

## 25. 建立一个新项目的简单流程

### 推荐方式：先在 GitHub 网页创建仓库，再克隆到本地

1. 登录 GitHub。
2. 点击 **New repository**。
3. 填写仓库名称，例如 `my-first-project`。
4. 初学阶段建议勾选创建 `README.md`。
5. 创建完成后，在终端执行：

```bash
cd ~/Projects
gh repo clone 你的用户名/my-first-project
cd my-first-project
```

之后即可在该文件夹中使用 Claude Code 或 Codex。

---

## 26. Git 常用命令速查

| 命令 | 含义 | 风险 |
|---|---|---|
| `git status` | 查看哪些文件发生变化 | 安全 |
| `git diff` | 查看尚未提交的具体改动 | 安全 |
| `git log --oneline --graph -10` | 查看最近提交记录 | 安全 |
| `git switch -c branch-name` | 创建并切换到新分支 | 安全 |
| `git add file` | 把某文件加入下一次提交 | 可检查后使用 |
| `git commit -m "说明"` | 保存一次本地版本 | 安全，可继续修正 |
| `git push` | 上传提交到 GitHub | 上传前应检查内容 |
| `git pull` | 拉取远端最新改动 | 协作项目中先确认是否有本地修改 |
| `git restore file` | 丢弃某文件尚未提交的修改 | 会丢失该文件当前改动 |
| `git reset --hard` | 强制回退且丢弃改动 | 初学阶段不要自行使用 |
| `git clean -fd` | 删除未被 Git 管理的文件夹和文件 | 初学阶段不要自行使用 |

---

## 27. `.gitignore`：永远不要上传秘密信息

在项目根目录创建 `.gitignore`，用于告诉 Git 哪些文件不要上传。常见内容：

```gitignore
# 密钥与环境变量
.env
.env.*
secrets/
*.key

# macOS
.DS_Store

# Node / Python 常见生成目录
node_modules/
__pycache__/
.venv/
dist/
```

检查某个敏感文件是否已经被 Git 追踪：

```bash
git status
```

如果你发现 API Key 已经提交或 push 到 GitHub，即使后来删除文件，旧提交中仍可能保留该 Key。此时应首先撤销并更换 Key，再处理仓库历史。

---

## 第一部分：macOS 基础准备

1. 安装 Apple 命令行工具与 Git

在终端执行：

```bash
xcode-select --install
```

系统会弹窗，按提示安装。安装完成后检查 Git：

```bash
git --version
```

若能看到类似 `git version ...` 的输出，说明 Git 可用。

> Git 是 Hermes 安装所需的基础工具，也是后续管理代码版本的核心工具。

2. 安装 Homebrew：macOS 常用软件安装器

Homebrew 用来安装 `gh`、Node.js 等开发工具。执行：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

安装结束时，终端通常会给出两到三行命令，用于把 Homebrew 加入环境变量。请**完整复制并执行安装器最后提示的命令**。

然后验证：

```bash
brew --version
```

## 第二部分：DeepSeek API Key 的安全原则

**API Key 是什么 ？**

API Key 相当于调用模型服务的“付费通行证”。任何拿到它的人，都可能消耗对应账户中的额度。因此：

- 不要把 Key 粘贴到微信聊天截图、公开文档、作业文件、GitHub 仓库；
- 不要在 AI 对话中要求 AI 复述你的 Key；
- 一旦怀疑泄露，应立即联系提供者撤销旧 Key 并生成新 Key；

## 第三部分：安装并配置 Hermes Agent + DeepSeek

Hermes 是通用型 Agent。它可以在终端中与你对话，读取文件、调用工具、积累可复用的技能，并在后续任务中复用你的偏好或流程。

适合场景：

- 起步阶段适合使用，比如你想了解一个实验的大概逻辑，你想了解代码框架，你想了解一些基础但不专业深入的内容，它可以作为你的管家类助手，但不适合作为一个专业的代码助手直接修改代码。

**安装 Hermes Agent**：

确认 Git 已安装：

```bash
git --version
```

然后执行 Hermes 官方安装命令：

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

安装完成后，重新加载终端配置：

```bash
source ~/.zshrc
```

检查安装是否成功：

```bash
hermes --help
```
**将 Hermes 连接到 DeepSeek API**：

在终端运行：

```bash
hermes setup
```

按照界面提示选择：

1. 选择 **Quick Setup**。
2. 模型提供商选择 **DeepSeek**。
3. 在提示输入 API Key 时，粘贴真实 Key。
4. Base URL 填写：

```text
https://api.deepseek.com
```

5. 模型选择：

```text
deepseek-v4-pro
```

**第一次运行 Hermes**：

推荐使用新的终端界面：

```bash
cd ~/Projects
hermes --tui
```

你可以先输入一个低风险任务：

```text
请说明你当前可用的工具，并告诉我你能否读取当前文件夹。不要修改任何文件。
```

或在一个已有项目目录中输入：

```text
请只阅读当前项目，概括它的目录结构、主要入口文件与运行方式。不要修改文件，不要执行安装命令。
```

**Hermes 日常命令速查**：

| 命令 | 作用 |
|---|---|
| `hermes --tui` | 以推荐的终端界面开始新对话 |
| `hermes` | 以经典界面开始对话 |
| `hermes --continue` 或 `hermes -c` | 继续最近一次对话 |
| `hermes model` | 在终端外配置或更换模型提供商、API Key、模型 |
| `/model` | 在当前 Hermes 会话中切换已经配置好的模型 |
| `/tools` | 查看当前可用工具 |
| `/help` | 查看会话内命令 |
| `hermes doctor` | 检查安装和配置问题 |
| `hermes update` | 更新 Hermes |

注意：`hermes model` 用于新增或重新配置提供商；会话中的 `/model` 只能切换已经配置好的模型。

**Hermes 的 Skills：把固定流程变成可重复使用的能力**

Hermes 的 Skills 可以理解为“给 AI 的工作说明书”。例如，以后你频繁需要：

- 整理课程资料为复习笔记；
- 规范化项目 README；
- 检查一份作业是否满足格式要求；
- 生成固定格式的周报。

就可以逐步把规则整理成 Skill，让它反复执行同一套流程。

先通过普通对话把任务做对，再考虑保存为 Skill。一个仍在变化、仍未验证的流程，不适合立刻固化。

他自己也会自行整理 skill，在任务完成后，如果他觉得这个流程可以复用，会自己保存一个skill。

## 第四部分：安装并配置 Claude Code + DeepSeek

**Claude Code 适合什么任务**

Claude Code 是围绕**一个代码项目目录**工作的开发型 Agent。它能阅读代码、修改文件、运行终端命令、执行测试、帮助理解 Git 改动。

是一个适合单次项目工作的工具，不同于 Hermes 的长期积累性质。它更像是一个专注于代码的“临时助手”，每次进入一个项目目录，都是一个新的工作上下文。

但是如果codex有额度可以优先使用codex，因为deepseek的模型不如gpt强大。

**安装 Claude Code**：

Claude Code 官方当前推荐 macOS 使用原生安装器。执行：

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

安装完成后，新开一个终端窗口，或执行：

```bash
source ~/.zshrc
```

检查安装：

```bash
claude --version
claude doctor
```

若 `claude --version` 正常输出版本号，即安装成功。

**备选安装方式**：

已经熟悉 Homebrew 的用户也可以使用：

```bash
brew install --cask claude-code
```

区别：

- 原生安装方式会自动在后台更新；
- Homebrew 安装方式通常需要自己执行 `brew upgrade claude-code` 更新（不过它会提醒你的，执行一下命令就好）。

**配置 Claude Code 使用 DeepSeek**

DeepSeek 官方提供了面向 Claude Code 的 **Anthropic API 兼容接口**：

```text
https://api.deepseek.com/anthropic
```

因此 Claude Code 可以直接使用 DeepSeek，无需另外安装代理工具。

**创建非敏感配置文件**：

执行：

```bash
mkdir -p ~/.claude
cat > ~/.claude/settings.json <<'JSON'
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.deepseek.com/anthropic",
    "ANTHROPIC_MODEL": "deepseek-v4-pro[1m]",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "deepseek-v4-pro[1m]",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "deepseek-v4-pro[1m]",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "deepseek-v4-flash",
    "CLAUDE_CODE_SUBAGENT_MODEL": "deepseek-v4-flash",
    "CLAUDE_CODE_EFFORT_LEVEL": "max"
  }
}
JSON
```
**安全写入 API Key**

以下命令会要求在终端中粘贴 API Key，输入内容不会显示在屏幕上，也不会直接出现在 Shell 历史记录中。

```bash
mkdir -p ~/.config/ai-secrets
read -s "DEEPSEEK_TOKEN?请粘贴 DeepSeek API Key（输入不会显示）: "
echo
printf 'export ANTHROPIC_AUTH_TOKEN=%q\n' "$DEEPSEEK_TOKEN" > ~/.config/ai-secrets/deepseek.env
chmod 600 ~/.config/ai-secrets/deepseek.env
unset DEEPSEEK_TOKEN
grep -qxF 'source ~/.config/ai-secrets/deepseek.env' ~/.zshrc || echo 'source ~/.config/ai-secrets/deepseek.env' >> ~/.zshrc
source ~/.zshrc
```

验证 Key 是否已被加载，但不打印 Key 内容：

```bash
test -n "$ANTHROPIC_AUTH_TOKEN" && echo "DeepSeek Key 已加载" || echo "DeepSeek Key 未加载"
```

**第一次使用 Claude Code**：

在一个文件夹中安全试用

```bash
claude
```

第一次对话建议输入：

```text
请只阅读当前项目，说明现在有哪些文件、Git 状态如何，以及你建议我用这个目录做什么练习。不要修改任何文件，不要运行安装命令。
```

**在真实项目中开始工作**：

进入项目目录后启动：

```bash
cd ~/Projects/你的项目名
claude
```
根据你的需求，采用先让 Claude 看你的文件夹结构和代码，然后再提出指令，引导他完成。所有AI工具最合适的使用方法不是一口气说出所有条件，最后是分步拆开，让他明白有几个任务，要做什么。

# 第七部分：Codex 使用指南

## 28. Codex 的定位

Codex 是 OpenAI 提供的代码代理工具，支持桌面应用与命令行工具。它可以读取项目、修改代码、运行命令、审阅 diff，并与 Git 工作流配合。

你可以将它用于：

- 对 Claude Code 已经完成的修改做独立审查；
- 让另一个模型提出实现方案；
- 让它阅读一个项目并解释结构；
- 检查测试覆盖、潜在 bug 与代码质量问题；
- 在你确认方案后完成局部实现。

### 重要配置边界

Codex 官方应用支持使用 **ChatGPT 账号** 或 **OpenAI API Key** 登录。  
本文配置的 DeepSeek API Key 用于 Hermes 与 Claude Code；不应拿它尝试登录 Codex。若你没有可用的 Codex 权限，可以先使用 Claude Code + DeepSeek 完成代码任务。

---

## 29. Codex App：最适合初学者的使用方式

### 29.1 安装

1. 打开 Codex 官方 App 文档页面：  
   <https://developers.openai.com/codex/app>
2. 根据 `uname -m` 输出选择安装包：
   - `arm64`：下载 Apple Silicon 版本；
   - `x86_64`：下载 Intel 版本。
3. 打开下载的安装包，将 Codex 拖入 Applications。
4. 打开 Codex，并用可用的 ChatGPT 账号或 OpenAI API Key 登录。

### 29.2 打开一个项目

1. 在 Codex App 中选择本地项目文件夹，例如：

```text
~/Projects/my-first-project
```

2. 首次使用时选择 **Local**，让 Codex 在你的 Mac 上处理该项目。
3. 第一条消息建议写：

```text
请只阅读当前项目，告诉我项目结构、运行方式、测试方式与当前 Git 状态。不要修改任何文件。
```

### 29.3 用 Codex 审查 Claude Code 的修改

当 Claude Code 修改完代码后，先保留尚未提交的 diff，打开 Codex，输入：

```text
请审查当前 Git diff。重点检查：
1. 是否实现了需求；
2. 是否引入逻辑错误或边界问题；
3. 是否缺少测试；
4. 是否修改了无关文件。
先只给审查报告，不要修改文件。
```

如果它指出明确问题，再决定由 Claude Code 修复，或让 Codex 在一个独立分支中修复。

---

## 30. Codex CLI：喜欢终端时再安装

若以后希望在终端中使用 Codex，可安装 Codex CLI：

```bash
npm i -g @openai/codex
```

或使用 Homebrew：

```bash
brew install --cask codex
```

运行：

```bash
cd ~/Projects/你的项目名
codex
```

首次运行时，按提示使用 ChatGPT 账号或 OpenAI API Key 登录。

---

## 31. Codex 与 Claude Code 的推荐协作方法

| 阶段 | 工具 | 示例任务 |
|---|---|---|
| 理解需求 | Claude Code 或 Hermes | 把需求拆成实现步骤 |
| 编写代码 | Claude Code + DeepSeek | 在当前仓库实现最小修改 |
| 查看改动 | 你自己 + Git | 执行 `git diff` 与测试 |
| 第二次审查 | Codex | 检查 diff、测试缺口与潜在 bug |
| 提交版本 | 你自己 + Git/GitHub | `git add`、`git commit`、`git push`、PR |

这种分工能减少“一个 AI 自己实现、自己判断自己正确”的风险。

---

# 第八部分：你可以直接复制使用的入门任务

## 32. 给 Hermes 的第一个任务

```text
我是第一次使用 Hermes。请先告诉我你当前能做什么，以及哪些操作需要我特别谨慎批准。不要读取隐私目录，不要修改文件，不要执行终端写入命令。
```

## 33. 给 Claude Code 的第一个任务

```text
我是第一次在这个项目里使用 Claude Code。请只阅读项目并说明：
1. 项目做什么；
2. 目录结构；
3. 如何运行；
4. 如何测试；
5. 当前 Git 是否干净。
不要修改文件，不要安装依赖，除非我之后明确同意。
```

## 34. 给 Codex 的第一个审查任务

```text
请作为代码审查者阅读当前项目与 Git diff，指出最值得关注的三类问题：正确性、可维护性、测试覆盖。只输出审查意见，不修改任何文件。
```
