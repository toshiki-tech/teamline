import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: '服务 - 天昊润蓝 Teamline',
  description: '天昊润蓝专业服务：品牌策划、视觉创意、数字营销、空间展示、交互视觉、公关策划',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 flex items-end justify-center pt-8 pb-0">
          <div className="relative w-full max-w-[85%]" style={{ height: 'calc(100% - 30px)' }}>
            <Image
              src="/assets/images/teamline/services.png"
              alt="我们的服务"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </section>

      {/* Hero Title Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="heading-section text-text mb-6">专业服务</h1>
            <p className="text-lead text-text-light max-w-2xl mx-auto">
              专业的广告传播服务，为品牌创造价值
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24" id="services">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 text-accent mb-6">
                  {service.icon}
                </div>
                <h3 className="heading-subsection text-text mb-5">
                  {service.title}
                </h3>
                <p className="text-body mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-text-light before:content-['•'] before:text-accent before:font-bold before:mr-2"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-bg-alt">
        <div className="container-custom text-center">
          <h2 className="heading-section text-text mb-6">
            需要专业服务？
          </h2>
          <p className="text-lead text-text-light mb-10 max-w-2xl mx-auto">
            联系我们，获取专业的品牌解决方案
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded font-medium hover:bg-accent/90 transition-all"
          >
            免费咨询
          </Link>
        </div>
      </section>
    </>
  )
}

const services = [
  {
    id: 'brand',
    title: '品牌策划',
    description:
      '全面的品牌策略规划，从定位到视觉系统，打造差异化品牌形象。我们深入了解客户需求，制定符合市场趋势的品牌战略，帮助企业在竞争激烈的市场中脱颖而出。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    features: ['品牌定位与策略', '品牌视觉识别系统', '品牌形象设计', '品牌传播策略'],
  },
  {
    id: 'visual',
    title: '视觉创意',
    description:
      '专业的视觉设计服务，包括平面设计、视觉识别系统等创意设计。我们以独特的创意视角，将品牌理念转化为具有冲击力的视觉作品。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    features: ['平面设计', '视觉识别系统（VIS）', '包装设计', '创意设计'],
  },
  {
    id: 'digital',
    title: '数字营销',
    description:
      '数字时代的营销解决方案，包括社交媒体运营、内容营销等。我们运用数据驱动的策略，帮助品牌在数字世界中建立影响力和用户连接。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    features: ['社交媒体运营', '内容营销', '数字广告投放', '数据分析与优化'],
  },
  {
    id: 'space',
    title: '空间展示',
    description:
      '展览展示、商业空间设计，打造沉浸式品牌体验空间。我们将品牌理念融入空间设计，创造令人印象深刻的视觉体验。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    features: ['展览设计', '商业空间设计', '展示空间规划', '环境视觉设计'],
  },
  {
    id: 'interaction',
    title: '交互视觉',
    description:
      'UI/UX设计、交互设计，提升用户体验和产品易用性。我们以用户为中心，设计直观、美观、易用的交互界面，实现用户体验的显著提升。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
    features: ['UI/UX设计', '交互设计', '用户体验优化', '产品设计'],
  },
  {
    id: 'pr',
    title: '公关策划',
    description:
      '品牌公关活动策划与执行，提升品牌影响力和美誉度。我们通过精心策划的公关活动，帮助品牌建立良好的公众形象和市场认知。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    features: ['活动策划', '媒体公关', '品牌传播', '事件营销'],
  },
]
