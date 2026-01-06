import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/poster.jpg"
        >
          <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <div className="relative z-[2] text-center py-16 container-custom">
          <h1 className="heading-hero mb-6 text-white">
            让客户期待更多 为品牌服务更久
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-95 text-white leading-relaxed tracking-wide">
            每一次 让客户多收获10%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/works"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded font-medium hover:bg-accent/90 hover:-translate-y-0.5 transition-all shadow-lg"
            >
              查看案例
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white border-2 border-white rounded font-medium hover:bg-white hover:text-primary transition-all"
            >
              免费咨询
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24" id="services">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-section text-text mb-6">
              我们的服务
            </h2>
            <p className="text-lead text-text-light max-w-2xl mx-auto">
              专业的广告传播服务，为品牌创造价值
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 text-accent mb-6">{service.icon}</div>
                <h3 className="heading-subsection text-text mb-4">
                  {service.title}
                </h3>
                <p className="text-body mb-6">{service.description}</p>
                <Link
                  href={`/services#${service.id}`}
                  className="text-accent hover:underline inline-flex items-center"
                >
                  了解更多 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases Section */}
      <section className="py-16 md:py-24 bg-bg-alt" id="cases">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-section text-text mb-6">
              成功案例
            </h2>
            <p className="text-lead text-text-light max-w-2xl mx-auto">
              精选项目展示，见证我们的专业能力
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCases.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="inline-block px-3 py-1 bg-accent text-white text-sm rounded">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-body mb-4">{item.description}</p>
                  <Link
                    href={`/works/${item.id}`}
                    className="text-accent hover:underline inline-flex items-center"
                  >
                    查看详情 →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/works"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-text text-text rounded font-medium hover:bg-text hover:text-white transition-all"
            >
              查看全部案例
            </Link>
          </div>
        </div>
      </section>

      {/* Company Advantages Section */}
      <section className="py-16 md:py-24" id="advantages">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-section text-text mb-6">
              我们的优势
            </h2>
            <p className="text-lead text-text-light max-w-2xl mx-auto">专业、创新、值得信赖</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item) => (
              <div
                key={item.id}
                className="text-center p-6 hover:bg-bg-alt rounded-lg transition-colors"
              >
                <div className="w-16 h-16 text-accent mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-text mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-bg-alt" id="about">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col">
              <h2 className="heading-section text-text mb-8">
                天昊润蓝
              </h2>
              <div className="space-y-6 text-body-lg flex-grow flex flex-col justify-center">
                <p>
                  天昊润蓝成立于2002年，23年深耕广告传播领域，现拥有30余人的专业团队，注册资本1100万元，办公面积近500平米。我们以专业的服务能力和创新的设计理念，为品牌创造价值。
                </p>
                <p>
                  成立至今，我们与众多金融企业、政府单位及互联网企业建立了深度合作关系，在品牌策划、视觉创意、数字营销等领域积累了丰富经验。我们主营设计、制作、代理国内外广告业务，组织文化艺术交流活动，以科学的管理机制和卓越的专业水准，形成了独特的核心竞争力。
                </p>
                <p className="font-medium text-text">
                  "客户至上，创造至上，立足本土，放眼世界"——这是我们的理念，也是我们与每一位合作伙伴共同成长的承诺。
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded font-medium hover:bg-accent/90 mt-8 transition-all"
              >
                了解更多
              </Link>
            </div>
            <div className="relative min-h-[400px] lg:h-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/assets/images/about/about.jpg"
                alt="天昊润蓝"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// 服务数据
const services = [
  {
    id: 'brand',
    title: '品牌策划',
    description: '全面的品牌策略规划，从定位到视觉系统，打造差异化品牌形象',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 'visual',
    title: '视觉创意',
    description: '专业的视觉设计服务，包括平面设计、视觉识别系统等创意设计',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    id: 'digital',
    title: '数字营销',
    description: '数字时代的营销解决方案，包括社交媒体运营、内容营销等',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 'space',
    title: '空间展示',
    description: '展览展示、商业空间设计，打造沉浸式品牌体验空间',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: 'interaction',
    title: '交互视觉',
    description: 'UI/UX设计、交互设计，提升用户体验和产品易用性',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    id: 'pr',
    title: '公关策划',
    description: '品牌公关活动策划与执行，提升品牌影响力和美誉度',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

// 精选案例数据
const featuredCases = [
  {
    id: 1,
    title: '空间展示案例',
    tag: '空间展示',
    description: '专业的空间展示设计，打造沉浸式品牌体验空间',
    image: '/assets/images/cases/homecase_01.jpg',
  },
  {
    id: 2,
    title: '品牌策划案例',
    tag: '品牌策划',
    description: '为知名企业打造完整的品牌识别系统，提升品牌价值和市场认知度',
    image: '/assets/images/cases/homecase_02.jpg',
  },
  {
    id: 3,
    title: '视觉创意案例',
    tag: '视觉创意',
    description: '创新视觉设计，为品牌注入活力，传达独特的品牌个性',
    image: '/assets/images/cases/homecase_03.jpg',
  },
]

// 优势数据
const advantages = [
  {
    id: 1,
    title: '专业团队',
    description: '23年+行业经验，30+专业设计师',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 2,
    title: '丰富经验',
    description: '服务众多知名企业，积累丰富项目经验',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: '创新设计',
    description: '持续创新，追求卓越，为客户创造价值',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: 4,
    title: '优质服务',
    description: '客户至上，提供全方位专业服务',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]
