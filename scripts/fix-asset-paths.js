#!/usr/bin/env node

/**
 * 修复构建后的 HTML 文件中的资源路径
 * 为所有根路径资源添加 basePath 前缀
 * 
 * basePath 从环境变量 NEXT_PUBLIC_BASE_PATH 读取
 * - 本地 / 自定义域名：'' 或 '/'（此时不执行路径修复）
 * - GitHub Pages 子路径部署：'/teamline'
 */

const fs = require('fs')
const path = require('path')

// 从环境变量读取 basePath，与 next.config.js 保持一致
const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined
  ? process.env.NEXT_PUBLIC_BASE_PATH || ''
  : ''
const outDir = path.join(process.cwd(), 'out')

// 如果 basePath 为空或 '/'，则不需要修复路径（本地 / 自定义域名部署）
if (!basePath || basePath === '/') {
  console.log('ℹ️  basePath 为空，跳过路径修复（本地 / 自定义域名部署）')
  process.exit(0)
}

console.log(`🔧 使用 basePath: ${basePath}`)

// 递归查找所有需要修复的文本文件（HTML + RSC payload 等）
function findTextFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      findTextFiles(filePath, fileList)
      return
    }
    // 仅处理文本文件：html / txt（Next.js export 的 RSC payload）
    if (file.endsWith('.html') || file.endsWith('.txt')) {
      fileList.push(filePath)
    }
  })
  return fileList
}

const textFiles = findTextFiles(outDir)

textFiles.forEach((filePath) => {
  let content = fs.readFileSync(filePath, 'utf8')
  let modified = false

  // 修复 src 属性中的路径（排除已经包含 basePath 的路径和 _next 路径）
  content = content.replace(
    /src="(\/[^"]+)"/g,
    (match, assetPath) => {
      if (assetPath.startsWith(basePath)) return match
      if (assetPath.startsWith('/_next')) return match
      if (assetPath.startsWith('data:') || assetPath.startsWith('http')) return match
      modified = true
      return `src="${basePath}${assetPath}"`
    }
  )

  // 修复 href 属性中的静态资源路径（排除已经包含 basePath 的路径和 _next 路径）
  content = content.replace(
    /href="(\/[^"]+\.(png|jpg|jpeg|svg|webp|gif|css|js|pdf|zip))"/gi,
    (match, assetPath) => {
      if (assetPath.startsWith(basePath)) return match
      if (assetPath.startsWith('/_next')) return match
      if (assetPath.startsWith('http')) return match
      modified = true
      return `href="${basePath}${assetPath}"`
    }
  )

  // 修复 RSC payload / 其他文本内容中的静态资源路径（重点：/assets、/logo）
  // 例如："src":"/assets/images/..."、"images":["/assets/..."]、"href":"/logo.png"
  const before = content
  content = content
    .replace(/"\/assets\//g, `"${basePath}/assets/`)
    .replace(/'\/assets\//g, `'${basePath}/assets/`)
    .replace(/\(\/assets\//g, `(${basePath}/assets/`)
    .replace(/"\/logo\./g, `"${basePath}/logo.`)
    .replace(/'\/logo\./g, `'${basePath}/logo.`)
    .replace(/\(\/logo\./g, `(${basePath}/logo.`)
  if (content !== before) modified = true

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`✅ 已修复: ${path.relative(outDir, filePath)}`)
  }
})

// 确保验证文件等 public 目录下的文件在正确位置
// Next.js 静态导出时，public 目录下的文件会被复制到 out 目录根目录
// 当使用 basePath 时，这些文件应该可以通过 /teamline/文件名 访问
// 但为了确保兼容性，我们检查一下验证文件是否存在
const verificationFile = path.join(outDir, '59f95d1e1ec2a0af424fdf896c0d55c5.txt')
if (fs.existsSync(verificationFile)) {
  console.log('✅ 验证文件已存在于输出目录')
} else {
  console.log('⚠️  警告：验证文件不存在于输出目录')
}

console.log(`\n✅ 已处理 ${textFiles.length} 个文本文件（html/txt）`)
