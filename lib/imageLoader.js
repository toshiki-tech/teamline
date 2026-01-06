/**
 * 自定义 Image Loader
 * 确保图片路径包含 basePath
 * 
 * basePath 从环境变量 NEXT_PUBLIC_BASE_PATH 读取（构建时可注入）
 * - 本地 / 自定义域名：''（根路径）
 * - GitHub Pages 子路径部署：'/teamline'
 */
module.exports = function imageLoader({ src, width, quality }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH || ''
    : ''

  // basePath 为空时，直接返回原路径（本地 / 自定义域名）
  if (!basePath || basePath === '/') {
    return src
  }

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
