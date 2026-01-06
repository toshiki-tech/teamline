'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BaseImage from '@/components/BaseImage'
import { casesData, categories, Case } from '@/lib/cases-data'

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredCases =
    selectedCategory === 'all'
      ? casesData
      : casesData.filter((item) => item.category === selectedCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <BaseImage
            src="/assets/images/cases/cases-hero.jpg"
            alt="成功案例"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center py-16 container-custom">
          <h1 className="heading-hero mb-6 text-white">成功案例</h1>
          <p className="text-xl md:text-2xl opacity-95 text-white leading-relaxed tracking-wide">
            精选项目展示，见证我们的专业能力
          </p>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-text hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((item) => (
              <Link
                key={item.id}
                href={`/works/${item.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="inline-block px-3 py-1 bg-accent text-white text-sm rounded">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-body line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}


