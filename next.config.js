/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js Image 优化，需要禁用
  },
  // GitHub Pages 部署需要 basePath（因为仓库名不是 username.github.io）
  basePath: '/teamline',
  assetPrefix: '/teamline',
}

module.exports = nextConfig
