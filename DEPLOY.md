# GitHub Pages 部署说明

## 配置步骤

### 1. 启用 GitHub Pages

1. 进入 GitHub 仓库：https://github.com/toshiki-tech/teamline
2. 点击 **Settings** → **Pages**
3. 在 **Source** 部分，选择：
   - **Source**: `GitHub Actions`
4. 保存设置

### 2. 配置 basePath（如果需要）

如果你的仓库名称是 `username.github.io`，则**不需要**配置 basePath。

如果你的仓库名称是其他名称（如 `teamline`），需要：

1. 打开 `next.config.js`
2. 取消注释以下两行：
   ```javascript
   basePath: '/teamline',
   assetPrefix: '/teamline',
   ```

### 3. 推送代码

推送代码到 `master` 分支后，GitHub Actions 会自动：
1. 构建 Next.js 静态站点
2. 部署到 GitHub Pages

### 4. 访问网站

- 如果仓库名是 `username.github.io`：https://username.github.io
- 如果仓库名是其他名称：https://username.github.io/teamline

## 注意事项

1. **图片优化**：GitHub Pages 不支持 Next.js Image 优化，已设置为 `unoptimized: true`
2. **静态导出**：使用 `output: 'export'` 生成纯静态文件
3. **自动部署**：每次推送到 `master` 分支都会自动部署
4. **构建时间**：首次部署可能需要几分钟，后续会更快

## 手动触发部署

如果需要手动触发部署：
1. 进入 GitHub 仓库
2. 点击 **Actions** 标签
3. 选择 **Deploy to GitHub Pages** workflow
4. 点击 **Run workflow**

