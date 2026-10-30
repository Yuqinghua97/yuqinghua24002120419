---
name: git-push-project
description: Commit and push this project to GitHub. Use when the user asks to submit code, commit and push, sync to GitHub, or deploy the project to Yuqinghua97/yuqinghua24002120419.
---

# Git Push Project

提交当前项目所有改动并推送到 GitHub 仓库 `https://github.com/Yuqinghua97/yuqinghua24002120419.git`。

## 固定目标

- **GitHub 仓库**: `https://github.com/Yuqinghua97/yuqinghua24002120419.git`
- **SSH 公钥**: 已配置在 `~/.ssh/id_ed25519`，可直接通过 HTTPS with embedded token 或 SSH 方式推送

## 执行步骤

### 1. 检查当前状态

```powershell
git --no-pager status -s
git --no-pager remote -v
git --no-pager branch --show-current
```

确认有哪些文件需要提交、当前远程配置、所在分支。

### 2. 配置远程仓库

优先使用 GitHub 远程。如果已有 `github` 远程则更新，否则新增：

```powershell
# 检查是否已有 github 远程
git remote | Select-String "github"

# 若存在则更新 URL
git remote set-url github https://github.com/Yuqinghua97/yuqinghua24002120419.git

# 若不存在则添加
git remote add github https://github.com/Yuqinghua97/yuqinghua24002120419.git
```

保留原有 `origin`（如果存在于 Gitee 等其他平台），不覆盖。

### 3. 添加所有改动

```powershell
git add -A
```

### 4. 提交

生成有意义的 commit message，格式：`类型: 简要描述`

| 类型 | 说明 |
|------|------|
| feat | 新功能 |
| fix | 修复 bug |
| style | 格式调整（不影响逻辑） |
| docs | 文档更新 |
| refactor | 重构 |
| init | 初始化/首次提交 |
| update | 通用更新 |

示例：
```powershell
git commit -m "init: 项目初始化提交"
git commit -m "feat: 添加 SVG 动画展示页"
git commit -m "fix: 修复样式布局问题"
```

如果用户没有指定 message，根据改动内容自动生成。如果只有 `init` 类型的空提交，则用 `init: 项目初始化提交`。

### 5. 推送到 GitHub

推送到 `github` 远程的当前分支：

```powershell
$branch = git --no-pager branch --show-current
git push -u github $branch
```

如果 push 失败（例如远程已有不同历史），先尝试 rebase：
```powershell
git pull --rebase github $branch
git push -u github $branch
```

### 6. 验证推送结果

```powershell
git --no-pager log --oneline -1
git remote -v
```

## 注意事项

- **不要覆盖 origin**：origin 可能指向其他平台（如 Gitee），只操作 `github` 远程
- **不要执行 destructive 命令**：禁止 `git push --force`、`git reset --hard`
- **不要自动添加 .gitignore 之外的大文件**：如果有图片/字体等 >10MB 文件，提醒用户确认
- **保持沙箱兼容**：所有命令通过 PowerShell 原生方式执行，不要使用 `cmd`、`bash` 等 shell
- **SSH Key 已就绪**：用户的 ed25519 公钥已生成在 `~/.ssh/id_ed25519.pub`，如需改用 SSH URL 可切换为 `git@github.com:Yuqinghua97/yuqinghua24002120419.git`

## 成功标准

- 所有改动已 `git commit`
- `github` 远程已配置并推送成功
- 输出最新 commit hash 和远程仓库 URL
