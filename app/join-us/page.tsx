import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: '加入我们 - 天昊润蓝 Teamline',
  description: '加入天昊润蓝，与专业团队一起，创造品牌价值。我们正在寻找品牌策划、文案、平面设计师等优秀人才',
}

const jobs = [
  {
    id: 1,
    title: '品牌策划',
    type: '全职',
    requirements: {
      title: '职位要求：',
      items: [
        '有良好的文学功底，理解力强，有丰富的撰写经验，文笔流畅，有感染力',
        '责任感强，具备良好的组织协调能力',
        '较强的人际沟通交往能力及良好的心态，能承受工作压力',
        '熟悉品牌推广、市场营销、活动策划的操作流程',
      ],
    },
  },
  {
    id: 2,
    title: '文案',
    type: '全职',
    requirements: {
      title: '职位职责：',
      items: [
        '负责品牌社会化营销的创意策划，能高效地完成创意方案（PPT），且方案逻辑清晰',
        '能够精准地洞察市场和消费者，结合客户需求，提供完整的策划方案',
        '根据客户部的Brief完成但不限于H5、视频脚本、线下活动等的内容创意',
        '在方案执行中，与各部门沟通确保创意内容的完整呈现',
      ],
    },
    requirements2: {
      title: '职位要求：',
      items: [
        '具有良好的文字功底，广告行业1年以上的工作经历',
        '本科以上学历，市场、广告、中文等相关专业毕业',
      ],
    },
  },
  {
    id: 3,
    title: '资深平面设计师',
    type: '全职',
    requirements: {
      title: '职位职责：',
      items: [
        '全面参与项目设计过程，独立完成日常设计工作，具备较强的创意和设计能力及规划管理能力',
        '根据策略及客户分析，精准完成创意设计方案',
        '将项目创意从概念通过视觉表现发展成为具体的平面设计',
        '掌控整体的设计方案，完善统一产品设计风格',
        '根据相关主题进行平面媒体的版面设计、修改及后期完稿工作',
      ],
    },
    requirements2: {
      title: '职位要求：',
      items: [
        '能够熟练使用平面设计相关软件，本科及以上学历，视觉传达、美术、平面设计等相关专业',
        '2、3年及以上相关工作经验',
      ],
    },
  },
  {
    id: 4,
    title: '平面设计师',
    type: '全职',
    requirements: {
      title: '职位要求：',
      items: [
        '有良好的创意构思，具备跃动的思维，完美的色感，敏锐的洞察力和行动能力',
        '具备优异的设计能力，能把根据客户要求延展创意并制作设计稿',
        '能够熟练使用平面设计相关软件和一定的手绘能力',
        '本科及以上学历，视觉传达、美术、平面设计等相关专业',
      ],
    },
  },
]

const benefits = [
  {
    id: 1,
    title: '专业团队',
    description: '与经验丰富的专业团队一起工作，共同成长',
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
    title: '成长空间',
    description: '完善的培训体系，提供广阔的职业发展空间',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: '工作环境',
    description: '舒适的工作环境和良好的团队氛围',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13" />
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
      </svg>
    ),
  },
  {
    id: 4,
    title: '创意平台',
    description: '参与知名品牌项目，发挥创意才华',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
]

export default function JoinUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 flex items-end justify-center pt-8 pb-0">
          <div className="relative w-full max-w-[85%]" style={{ height: 'calc(100% - 30px)' }}>
            <Image
              src="/assets/images/join-us/joinus-image.jpg"
              alt="加入我们"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
        <div className="relative z-10 text-center py-16 container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text"></h1>
          <p className="text-xl md:text-2xl text-text-light">
            
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
              加入我们，与专业团队一起，创造品牌价值
              </h2>
            </div>
            <div className="space-y-4 text-text-light text-lg text-center">
              <p>
                天昊润蓝是一家专业的广告传播服务公司，我们致力于为客户提供优质的品牌策划、视觉创意、数字营销等服务。如果您热爱创意、追求卓越，欢迎加入我们的团队。
              </p>
              <p>
                我们为员工提供良好的工作环境、完善的培训体系和广阔的发展空间。让我们一起为品牌创造更多价值。
              </p>
            </div>
          </div>

          {/* Jobs Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                招聘职位
              </h2>
              <p className="text-xl text-text-light">
                我们正在寻找志同道合的伙伴
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border border-border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-text">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-accent text-white text-sm rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-text mb-3">
                        {job.requirements.title}
                      </h4>
                      <ul className="space-y-2 text-text-light">
                        {job.requirements.items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {job.requirements2 && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-text mb-3">
                          {job.requirements2.title}
                        </h4>
                        <ul className="space-y-2 text-text-light">
                          {job.requirements2.items.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-accent mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-gray-50 border-t border-border">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <a
                        href={`mailto:hr@teamline.cn?subject=应聘-${job.title}`}
                        className="px-6 py-2 bg-accent text-white rounded hover:bg-accent/90 transition-colors text-center"
                      >
                        投递简历
                      </a>
                      <span className="text-text-light text-sm">
                        hr@teamline.cn
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16 bg-gray-50 py-16 rounded-lg">
            <div className="container-custom">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
                我们提供
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="text-center p-6 bg-white rounded-lg shadow-md"
                  >
                    <div className="w-16 h-16 text-accent mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-text-light">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary text-white py-16 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              期待您的加入
            </h2>
            <p className="text-xl opacity-95 mb-8">
              请将简历和作品发送至我们的邮箱
            </p>
            <div className="mb-8">
              <a
                href="mailto:hr@teamline.cn"
                className="inline-flex items-center gap-3 text-xl font-semibold hover:text-accent transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                hr@teamline.cn
              </a>
            </div>
            <Link
              href="/about"
              className="inline-block px-6 py-3 border-2 border-white text-white rounded hover:bg-white hover:text-primary transition-colors"
            >
              了解更多公司信息
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

