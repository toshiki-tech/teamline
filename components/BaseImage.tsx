'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { ComponentProps } from 'react'

/**
 * 带 basePath 支持的 Image 组件
 * 用于 GitHub Pages 部署时的路径处理
 */
export default function BaseImage({
  src,
  ...props
}: ComponentProps<typeof Image>) {
  const pathname = usePathname()
  const basePath = pathname.startsWith('/teamline') ? '/teamline' : ''

  // 处理 src 路径
  const imageSrc =
    typeof src === 'string'
      ? src.startsWith('/') && basePath
        ? `${basePath}${src}`
        : src
      : src

  return <Image src={imageSrc} {...props} />
}

