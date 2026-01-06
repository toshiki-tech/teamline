# 自定义域名部署指南

## 概述

本项目支持两种部署方式：
1. **GitHub Pages 子路径部署**（默认）：`https://username.github.io/teamline`
2. **自定义域名部署**：`https://teamline.cn` 或 `https://www.teamline.cn`

## 配置方式

### 方式一：GitHub Pages 子路径部署（默认）

无需任何配置，直接构建即可：

```bash
npm run build
```

basePath 默认为 `/teamline`。

### 方式二：自定义域名部署

在构建前设置环境变量：

```bash
# Linux/macOS
NEXT_PUBLIC_BASE_PATH="" npm run build

# Windows (PowerShell)
$env:NEXT_PUBLIC_BASE_PATH=""; npm run build

# Windows (CMD)
set NEXT_PUBLIC_BASE_PATH= && npm run build
```

或者创建 `.env.production` 文件：

```bash
# .env.production
NEXT_PUBLIC_BASE_PATH=
```

然后构建：

```bash
npm run build
```

## GitHub Actions 配置

### 子路径部署（默认）

无需修改 workflow，直接使用默认配置。

### 自定义域名部署

修改 `.github/workflows/nextjs.yml`，在构建步骤中添加环境变量：

```yaml
- name: Build with Next.js
  run: ${{ steps.detect-package-manager.outputs.runner }} next build
  env:
    NEXT_PUBLIC_BASE_PATH: ""
```

或者在 GitHub 仓库的 Settings → Secrets and variables → Actions 中添加环境变量。

## 验证

构建后检查 `out/index.html`：

- **子路径部署**：路径应为 `/teamline/assets/...`
- **自定义域名部署**：路径应为 `/assets/...`

## 注意事项

1. **basePath 为空时**：`fix-asset-paths.js` 脚本会自动跳过路径修复
2. **环境变量**：`NEXT_PUBLIC_BASE_PATH` 必须以 `NEXT_PUBLIC_` 开头，才能在客户端访问
3. **构建缓存**：修改 basePath 后，建议清理 `.next` 缓存重新构建

