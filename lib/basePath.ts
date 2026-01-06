/**
 * 获取 basePath
 * Next.js 在构建时会自动处理 basePath，但原生 HTML 标签（如 video）需要手动处理
 */
export function getBasePath(): string {
  // 在运行时，从 window.location 获取
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname
    if (pathname.startsWith('/teamline')) {
      return '/teamline'
    }
    return ''
  }
  // 在服务端渲染时，从环境变量获取
  return process.env.NEXT_PUBLIC_BASE_PATH || '/teamline'
}

/**
 * 为路径添加 basePath
 * 用于原生 HTML 标签（video, audio, img 等）的 src 属性
 * Next.js 的 Link 和 Image 组件会自动处理 basePath，不需要使用此函数
 */
export function withBasePath(path: string): string {
  const basePath = getBasePath()
  if (!basePath || basePath === '/') return path
  // 确保路径以 / 开头
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  // 避免重复添加 basePath
  if (normalizedPath.startsWith(basePath)) return normalizedPath
  return `${basePath}${normalizedPath}`
}

