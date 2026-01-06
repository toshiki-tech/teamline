/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js Image 优化，需要禁用
    // 自定义 loader 确保路径包含 basePath
    loader: 'custom',
    loaderFile: './lib/imageLoader.js',
  },
  // GitHub Pages 部署需要 basePath（因为仓库名不是 username.github.io）
  basePath: '/teamline',
  assetPrefix: '/teamline',
  trailingSlash: true, // 确保所有路径以斜杠结尾，避免路径解析问题
}

module.exports = nextConfig
