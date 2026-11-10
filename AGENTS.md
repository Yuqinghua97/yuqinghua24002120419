# AGENTS.md

This is a static web project for learning frontend design principles. There is no build system, test framework, linting, or typechecking.

## Project type
- Static website with HTML, CSS, and font assets
- Design guidance in markdown (SKILL.md, README.md)
- No package.json, npm scripts, or development tooling

## What an agent should know
- Editable files: `.html`, `.css`, `.md`, font assets under `font/`, and `SKILL/`
- No `npm install`, `npm run`, or test commands exist
- Changes are purely visual/structural; preview by opening `index.html` in a browser
- The `SKILL/frontend-design/SKILL.md` contains design principles — follow these when making UI-related changes

## No commands needed
There are no developer commands to learn. This is a content/design repository, not a code repository with a build pipeline.

## 注释规则（强制 · Comment rules — mandatory）

### 1. 新建 HTML 文件必须加入文件头注释
每个新建的 `.html` 文件必须在 `<!DOCTYPE html>` 之后（或 `<head>` 内）加入注释，包含以下四项：

- **作者**：于清华
- **建立时间**：创建当日日期（如 2026-11-04）
- **使用大模型**：编写该文件所用的大模型名称
- **功能名称**：该页面的功能/用途名称

示例：

```html
<!DOCTYPE html>
<!--
  功能名称: 移动端下导航（字体图标版）
  作者: 于清华
  建立时间: 2026-11-04
  使用大模型: GLM-5.3-Flash
-->
<html lang="zh-CN">
```

### 2. JS 函数必须添加功能注释
每个 JavaScript 函数定义之前，必须加一行注释，说明该函数主要实现的功能。

示例：

```javascript
// 初始化 Lucide 图标库，将所有 data-lucide 属性替换为 SVG 图标
function yqh_initIcons() {
  lucide.createIcons();
}
```

规则同时适用于内联 `<script>` 与外部 `.js` 文件中的函数。