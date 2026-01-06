import Image from 'next/image'

export const metadata = {
  title: '关于我们 - 天昊润蓝 Teamline',
  description: '天昊润蓝成立于2002年，专业广告传播服务公司，与多家金融企业、政府单位及互联网企业深度合作',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="relative z-10 text-center py-16 container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
          <p className="text-xl md:text-2xl opacity-95">
            专业、创新、值得信赖
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                天昊润蓝
              </h2>
              <div className="space-y-4 text-text-light text-lg flex-grow flex flex-col justify-center">
                <p>
                  天昊润蓝成立于2002年，注册资本1100万元，现拥有员工30余人，办公面积合计近五百平米。
                </p>
                <p>
                  天昊润蓝成立至今与多家金融企业、政府单位及互联网企业深度合作，共同成长，树立了业内良好口碑。天昊润蓝主营设计、制作、代理国内及外商来华广告，组织文化艺术交流活动。以科学的管理机制和良好的专业水准，形成了企业核心竞争力；以"客户至上，创造至上，立足本土，放眼世界"的目标与理念，与众多客户和媒体建立了密切的合作关系，是目前国内优秀的专注于广告传播服务的公司之一。
                </p>
              </div>
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

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                23+
              </div>
              <div className="text-text-light">年专业经验</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                30+
              </div>
              <div className="text-text-light">团队成员</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                500
              </div>
              <div className="text-text-light">办公面积（平米）</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                1100
              </div>
              <div className="text-text-light">注册资本（万元）</div>
            </div>
          </div>

          {/* Company Values */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
              我们的理念
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.id} className="text-center p-6">
                  <div className="w-16 h-16 text-accent mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-light">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Office Environment */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
              工作空间
            </h2>
            <div className="relative mx-auto" style={{ width: '1440px', maxWidth: '100%', aspectRatio: '1440/900' }}>
              {/* 第一行：三张图 */}
              <div className="absolute left-0 top-0 overflow-hidden" style={{ width: '25.07%', height: '50%' }}>
                <Image
                  src="/assets/images/about/index_01.jpg"
                  alt="办公环境 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute overflow-hidden" style={{ left: '25.07%', top: '0', width: '49.93%', height: '50%' }}>
                <Image
                  src="/assets/images/about/index_02.jpg"
                  alt="办公环境 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute overflow-hidden" style={{ left: '75%', top: '0', width: '25%', height: '50%' }}>
                <Image
                  src="/assets/images/about/index_03.jpg"
                  alt="办公环境 3"
                  fill
                  className="object-cover"
                />
              </div>
              {/* 第二行：两张图 */}
              <div className="absolute left-0 overflow-hidden" style={{ top: '50%', width: '75%', height: '50%' }}>
                <Image
                  src="/assets/images/about/index_04.jpg"
                  alt="办公环境 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute overflow-hidden" style={{ left: '75%', top: '50%', width: '25%', height: '50%' }}>
                <Image
                  src="/assets/images/about/index_05.jpg"
                  alt="办公环境 5"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const values = [
  {
    id: 1,
    title: '客户至上',
    description: '以客户需求为中心，提供定制化解决方案，与客户共同成长',
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
    title: '创造至上',
    description: '不断创新，追求卓越，为客户创造最大价值',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: '立足本土',
    description: '深入了解本土市场，提供符合本地特色的专业服务',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 4,
    title: '放眼世界',
    description: '国际化视野，融合全球先进理念与本土实践',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

const officeImages = [
  '/assets/images/about/index_01.jpg',
  '/assets/images/about/index_02.jpg',
  '/assets/images/about/index_03.jpg',
  '/assets/images/about/index_05.jpg',
]
