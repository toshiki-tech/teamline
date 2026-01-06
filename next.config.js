/** @type {import('next').NextConfig} */
// 从环境变量读取 basePath
// - 未设置：默认为 ''（本地和自定义域名部署走根路径 / ）
// - 在 GitHub Pages 构建时：通过 NEXT_PUBLIC_BASE_PATH='/teamline' 注入
const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined
  ? process.env.NEXT_PUBLIC_BASE_PATH
  : ''

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js Image 优化，需要禁用
    // 自定义 loader 确保路径包含 basePath
    loader: 'custom',
    loaderFile: './lib/imageLoader.js',
  },
  // basePath 配置
  // - 本地 / 自定义域名：''（根路径）
  // - GitHub Pages 子路径：'/teamline'（通过环境变量注入）
  basePath,
  assetPrefix: basePath,
  trailingSlash: true, // 确保所有路径以斜杠结尾，避免路径解析问题
}

module.exports = nextConfig
