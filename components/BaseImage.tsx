'use client'

import Image from 'next/image'
import { ComponentProps } from 'react'
import { getBasePath } from '@/lib/basePath'

/**
 * 带 basePath 支持的 Image 组件
 * 用于 GitHub Pages 部署时的路径处理
 * 在客户端动态检测并应用 basePath
 */
export default function BaseImage({
  src,
  ...props
}: ComponentProps<typeof Image>) {
  const basePath = getBasePath()

  // 处理 src 路径
  const imageSrc =
    typeof src === 'string'
      ? src.startsWith('/') && basePath && !src.startsWith(basePath)
        ? `${basePath}${src}`
        : src
      : src

  return <Image src={imageSrc} {...props} />
}

