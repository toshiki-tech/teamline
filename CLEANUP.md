# 文件清理指南

## ✅ 已迁移到 Next.js 的页面（可以删除）

### HTML 文件
以下 HTML 文件已经被 Next.js 页面替代，可以安全删除：

1. **index.html** → `app/page.tsx` ✅
2. **about.html** → `app/about/page.tsx` ✅
3. **cases.html** → `app/works/page.tsx` ✅ (cases 已改名为 works)
4. **services.html** → `app/services/page.tsx` ✅
5. **join-us.html** → `app/join-us/page.tsx` ✅

### 相关的 JavaScript 文件
以下 JS 文件的功能已经迁移到 Next.js，可以删除：

1. **scripts/main.js** - 首页功能已迁移
2. **scripts/about.js** - 关于我们页面功能已迁移
3. **scripts/cases.js** - 案例页面功能已迁移（现在使用 `lib/cases-data.ts`）
4. **scripts/join-us.js** - 加入我们页面功能已迁移

### 相关的 CSS 文件
以下 CSS 文件已经被 Tailwind CSS 替代，可以删除：

1. **styles/main.css** - 主样式已迁移到 `app/globals.css` 和 Tailwind
2. **styles/about.css** - 关于我们页面样式已迁移
3. **styles/cases.css** - 案例页面样式已迁移
4. **styles/join-us.css** - 加入我们页面样式已迁移

## ⚠️ 暂时保留的文件

### HTML 文件
以下页面还没有迁移到 Next.js，暂时保留：

1. **sharing.html** - 分享列表页（尚未迁移）
2. **sharing-detail.html** - 分享详情页（尚未迁移）

### 相关的 JavaScript 和 CSS 文件
1. **scripts/sharing.js** - 分享列表页功能
2. **scripts/sharing-detail.js** - 分享详情页功能
3. **styles/sharing.css** - 分享页面样式

### 工具脚本（保留）
1. **scripts/download_sharing_images.sh** - 图片下载脚本（工具类，保留）
2. **scripts/download_sharing_images.py** - Python 下载脚本（工具类，保留）
3. **scripts/fix-asset-paths.js** - 构建后路径修复脚本（Next.js 构建流程需要，保留）

## 📝 清理建议

### 立即可以删除的文件：

```bash
# HTML 文件
rm index.html about.html cases.html services.html join-us.html

# JavaScript 文件
rm scripts/main.js scripts/about.js scripts/cases.js scripts/join-us.js

# CSS 文件
rm styles/main.css styles/about.css styles/cases.css styles/join-us.css
```

### 或者创建一个清理脚本：

```bash
#!/bin/bash
# cleanup-old-files.sh

echo "清理已迁移到 Next.js 的旧文件..."

# 删除 HTML 文件
rm -f index.html about.html cases.html services.html join-us.html

# 删除已迁移的 JS 文件
rm -f scripts/main.js scripts/about.js scripts/cases.js scripts/join-us.js

# 删除已迁移的 CSS 文件
rm -f styles/main.css styles/about.css styles/cases.css styles/join-us.css

echo "✅ 清理完成！"
echo ""
echo "⚠️  注意：以下文件暂时保留（尚未迁移到 Next.js）："
echo "  - sharing.html"
echo "  - sharing-detail.html"
echo "  - scripts/sharing.js"
echo "  - scripts/sharing-detail.js"
echo "  - styles/sharing.css"
```

## 🎯 下一步

如果将来要迁移分享页面到 Next.js，可以创建：
- `app/sharing/page.tsx` - 分享列表页
- `app/sharing/[id]/page.tsx` - 分享详情页

然后就可以删除：
- `sharing.html`
- `sharing-detail.html`
- `scripts/sharing.js`
- `scripts/sharing-detail.js`
- `styles/sharing.css`

