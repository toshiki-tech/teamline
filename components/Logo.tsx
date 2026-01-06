import Link from 'next/link'
import Image from 'next/image'

/**
 * Logo 组件
 * 
 * 当前使用 Next.js Image 组件加载 PNG 图片
 * 建议：使用设计工具将 logo.png 转换为精确的 SVG 路径，以获得更好的清晰度和可缩放性
 * 
 * 转换工具推荐：
 * - SVGOMG: https://jakearchibald.github.io/svgomg/
 * - Adobe Illustrator: 导出为 SVG
 * - Inkscape: 免费开源工具
 */
export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src="/logo.png"
        alt="天昊润蓝 Teamline"
        width={163}
        height={31}
        priority
        className="h-8 w-auto"
      />
    </Link>
  )
}

