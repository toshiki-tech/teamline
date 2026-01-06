#!/usr/bin/env node

/**
 * 修复构建后的 HTML 文件中的资源路径
 * 为所有 /assets/ 开头的路径添加 /teamline 前缀
 */

const fs = require('fs')
const path = require('path')

const basePath = '/teamline'
const outDir = path.join(process.cwd(), 'out')

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

  // 修复 Image 组件的 src 属性（未优化的图片路径）
  // 匹配 src="/assets/..." 但不包含 /teamline
  const newContent = content.replace(
    /src="(\/assets\/[^"]+)"/g,
    (match, assetPath) => {
      if (!assetPath.startsWith(basePath)) {
        modified = true
        return `src="${basePath}${assetPath}"`
      }
      return match
    }
  )

  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf8')
    console.log(`✅ 已修复: ${path.relative(outDir, filePath)}`)
  }
})

console.log(`\n✅ 已处理 ${htmlFiles.length} 个 HTML 文件`)

