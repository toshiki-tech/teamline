#!/usr/bin/env node

/**
 * 修复构建后的 HTML 文件中的资源路径
 * 为所有根路径资源添加 basePath 前缀
 * 
 * basePath 从环境变量 NEXT_PUBLIC_BASE_PATH 读取
 * - GitHub Pages 子路径部署：'/teamline'
 * - 自定义域名部署：'' 或 '/'（此时不执行路径修复）
 */

const fs = require('fs')
const path = require('path')

// 从环境变量读取 basePath，与 next.config.js 保持一致
// 如果环境变量未设置，使用默认值 '/teamline'
// 如果环境变量设置为空字符串，表示自定义域名部署，basePath 为空
const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
  ? process.env.NEXT_PUBLIC_BASE_PATH 
  : '/teamline'
const outDir = path.join(process.cwd(), 'out')

// 如果 basePath 为空或 '/'，则不需要修复路径（自定义域名部署）
if (!basePath || basePath === '/') {
  console.log('ℹ️  basePath 为空，跳过路径修复（适用于自定义域名部署）')
  process.exit(0)
}

console.log(`🔧 使用 basePath: ${basePath}`)

// 递归查找所有 HTML 文件
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList)
    } else if (file.endsWith('.html')) {
      fileList.push(filePath)
    }
  })
  return fileList
}

const htmlFiles = findHtmlFiles(outDir)

htmlFiles.forEach((filePath) => {
  let content = fs.readFileSync(filePath, 'utf8')
  let modified = false

  // 修复 src 属性中的路径（排除已经包含 basePath 的路径和 _next 路径）
  content = content.replace(
    /src="(\/[^"]+)"/g,
    (match, assetPath) => {
      // 跳过已经包含 basePath 的路径
      if (assetPath.startsWith(basePath)) {
        return match
      }
      // 跳过 _next 路径（Next.js 会自动处理）
      if (assetPath.startsWith('/_next')) {
        return match
      }
      // 跳过 data: 和 http(s): 协议
      if (assetPath.startsWith('data:') || assetPath.startsWith('http')) {
        return match
      }
      // 为其他根路径添加 basePath
      modified = true
      return `src="${basePath}${assetPath}"`
    }
  )

  // 修复 href 属性中的静态资源路径（排除已经包含 basePath 的路径和 _next 路径）
  content = content.replace(
    /href="(\/[^"]+\.(png|jpg|jpeg|svg|webp|gif|css|js|pdf|zip))"/gi,
    (match, assetPath) => {
      // 跳过已经包含 basePath 的路径
      if (assetPath.startsWith(basePath)) {
        return match
      }
      // 跳过 _next 路径
      if (assetPath.startsWith('/_next')) {
        return match
      }
      // 跳过 http(s): 协议
      if (assetPath.startsWith('http')) {
        return match
      }
      // 为静态资源路径添加 basePath
      modified = true
      return `href="${basePath}${assetPath}"`
    }
  )

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`✅ 已修复: ${path.relative(outDir, filePath)}`)
  }
})

console.log(`\n✅ 已处理 ${htmlFiles.length} 个 HTML 文件`)

