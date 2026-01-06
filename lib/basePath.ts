/**
 * 获取 basePath
 * Next.js 在构建时会自动处理 basePath，但原生 HTML 标签（如 video）需要手动处理
 * 
 * basePath 从环境变量 NEXT_PUBLIC_BASE_PATH 读取（构建时可注入）
 * - 本地 / 自定义域名：''（根路径）
 * - GitHub Pages 子路径部署：'/teamline'
 */
export function getBasePath(): string {
  // 优先从环境变量获取（构建时设置）
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_BASE_PATH !== undefined) {
    return process.env.NEXT_PUBLIC_BASE_PATH || ''
  }
  
  // 在客户端运行时，从 window.location 动态检测（兼容直接访问导出后的静态站点）
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname
    if (pathname.startsWith('/teamline')) {
      return '/teamline'
    }
    return ''
  }
  
  // 默认值：本地开发和自定义域名走根路径
  return ''
}

/**
 * 为路径添加 basePath
 * 仅用于原生 HTML 标签（video, audio, img 等）的 src 属性
 * Next.js 的 Link 和 Image 组件会自动处理 basePath，不需要使用此函数
 */
export function withBasePath(path: string): string {
  const basePath = getBasePath()
  if (!basePath || basePath === '/') return path
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  if (normalizedPath.startsWith(basePath)) return normalizedPath
  return `${basePath}${normalizedPath}`
}
