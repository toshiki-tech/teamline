/** @type {import('next').NextConfig} */
// 从环境变量读取 basePath
// - 未设置：默认为 '/teamline'（GitHub Pages 子路径部署）
// - 设置为空字符串：自定义域名部署，basePath 为空
// - 设置为其他值：使用该值作为 basePath
const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
  ? process.env.NEXT_PUBLIC_BASE_PATH 
  : '/teamline'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js Image 优化，需要禁用
    // 自定义 loader 确保路径包含 basePath
    loader: 'custom',
    loaderFile: './lib/imageLoader.js',
  },
  // basePath 配置
  // - GitHub Pages 子路径部署：'/teamline'
  // - 自定义域名部署：'' 或 '/'
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true, // 确保所有路径以斜杠结尾，避免路径解析问题
}

module.exports = nextConfig
