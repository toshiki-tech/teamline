# GitHub Pages 部署说明

## 配置步骤

### 1. 启用 GitHub Pages

1. 进入 GitHub 仓库：https://github.com/toshiki-tech/teamline
2. 点击 **Settings** → **Pages**
3. 在 **Source** 部分，选择：
   - **Source**: `GitHub Actions`
4. 保存设置

### 2. 配置说明

✅ **已自动配置**：
- `next.config.js` 已配置 `basePath: '/teamline'` 和 `assetPrefix: '/teamline'`
- `next.config.js` 已配置 `output: 'export'` 用于静态导出
- `next.config.js` 已配置 `images.unoptimized: true`（GitHub Pages 不支持 Next.js Image 优化）
- GitHub Actions workflow (`.github/workflows/nextjs.yml`) 已配置自动构建和部署

### 3. 推送代码

推送代码到 `master` 分支后，GitHub Actions 会自动：
1. 构建 Next.js 静态站点
2. 部署到 GitHub Pages

### 4. 访问网站

部署成功后，网站地址为：
**https://toshiki-tech.github.io/teamline**

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

