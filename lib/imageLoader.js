/**
 * 自定义 Image Loader
 * 确保图片路径包含 basePath，用于 GitHub Pages 部署
 * 
 * 注意：在静态导出模式下，Next.js Image 组件可能不会使用此 loader
 * 但设置 loader 可以确保路径在构建时被正确处理
 */
module.exports = function imageLoader({ src, width, quality }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/teamline'
  
  // 如果路径已经包含 basePath，直接返回
  if (src.startsWith(basePath)) {
    return src
  }
  
  // 如果路径以 / 开头，添加 basePath
  if (src.startsWith('/')) {
    return `${basePath}${src}`
  }
  
  // 其他情况直接返回
  return src
}

