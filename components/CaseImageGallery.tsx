'use client'

import { useState, useEffect, useRef } from 'react'
import BaseImage from '@/components/BaseImage'

interface CaseImageGalleryProps {
  images: string[]
  title: string
}

export default function CaseImageGallery({
  images,
  title,
}: CaseImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // 移动端手势滑动
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return

      if (e.key === 'ArrowLeft' && lightboxIndex > 0) {
        setLightboxIndex(lightboxIndex - 1)
      }
      if (e.key === 'ArrowRight' && lightboxIndex < images.length - 1) {
        setLightboxIndex(lightboxIndex + 1)
      }
      if (e.key === 'Escape') {
        setIsLightboxOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen, lightboxIndex, images.length])

  // 阻止背景滚动
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isLightboxOpen])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const goToPrevious = () => {
    if (isLightboxOpen) {
      setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : images.length - 1)
    } else {
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
    }
  }

  const goToNext = () => {
    if (isLightboxOpen) {
      setLightboxIndex(lightboxIndex < images.length - 1 ? lightboxIndex + 1 : 0)
    } else {
      setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
    }
  }

  return (
    <>
      {/* 移动端：滑动画廊 */}
      <div className="md:hidden">
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden rounded-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="relative w-full flex-shrink-0"
                style={{ aspectRatio: '16/9' }}
              >
                <BaseImage
                  src={img}
                  alt={`${title} ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  onClick={() => openLightbox(index)}
                />
              </div>
            ))}
          </div>

          {/* 指示器 */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/50'
                  }`}
                  aria-label={`查看第 ${index + 1} 张图片`}
                />
              ))}
            </div>
          )}

          {/* 导航按钮 */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all"
                aria-label="上一张"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all"
                aria-label="下一张"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* 图片计数 */}
        {images.length > 1 && (
          <div className="mt-4 text-center text-sm text-text-light">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* 桌面端：网格布局 + Lightbox */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 主图 */}
          <div
            className="relative aspect-video rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => openLightbox(0)}
          >
            <BaseImage
              src={images[0]}
              alt={`${title} 主图`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 缩略图网格 */}
          {images.length > 1 && (
            <div className="grid grid-cols-2 gap-4">
              {images.slice(1, 5).map((img, index) => (
                <div
                  key={index + 1}
                  className="relative aspect-video rounded-lg overflow-hidden shadow-md cursor-pointer group"
                  onClick={() => openLightbox(index + 1)}
                >
                  <BaseImage
                    src={img}
                    alt={`${title} ${index + 2}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              ))}
              {images.length > 5 && (
                <div
                  className="relative aspect-video rounded-lg overflow-hidden shadow-md cursor-pointer group bg-gray-100"
                  onClick={() => openLightbox(4)}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-text mb-2">
                        +{images.length - 5}
                      </div>
                      <div className="text-sm text-text-light">查看更多</div>
                    </div>
                  </div>
                  <BaseImage
                    src={images[4]}
                    alt={`${title} 更多`}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox 全屏查看 */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* 关闭按钮 */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-10"
            aria-label="关闭"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* 图片容器 */}
          <div
            className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <BaseImage
                src={images[lightboxIndex]}
                alt={`${title} ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* 导航按钮 */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevious()
                  }}
                  className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
                  aria-label="上一张"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNext()
                  }}
                  className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
                  aria-label="下一张"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </>
            )}

            {/* 图片计数 */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                {lightboxIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

