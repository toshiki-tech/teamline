#!/bin/bash
# 清理已迁移到 Next.js 的旧文件

echo "🧹 开始清理已迁移到 Next.js 的旧文件..."
echo ""

# 删除 HTML 文件
echo "删除 HTML 文件..."
rm -f index.html about.html cases.html services.html join-us.html
echo "✅ HTML 文件已删除"

# 删除已迁移的 JS 文件
echo ""
echo "删除已迁移的 JavaScript 文件..."
rm -f scripts/main.js scripts/about.js scripts/cases.js scripts/join-us.js
echo "✅ JavaScript 文件已删除"

# 删除已迁移的 CSS 文件
echo ""
echo "删除已迁移的 CSS 文件..."
rm -f styles/main.css styles/about.css styles/cases.css styles/join-us.css
echo "✅ CSS 文件已删除"

echo ""
echo "🎉 清理完成！"
echo ""
echo "⚠️  注意：以下文件暂时保留（尚未迁移到 Next.js）："
echo "  - sharing.html"
echo "  - sharing-detail.html"
echo "  - scripts/sharing.js"
echo "  - scripts/sharing-detail.js"
echo "  - styles/sharing.css"
