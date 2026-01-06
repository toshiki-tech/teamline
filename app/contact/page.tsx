export const metadata = {
  title: '联系我们 - 天昊润蓝 Teamline',
  description: '联系天昊润蓝，获取专业的品牌传播服务',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-white bg-primary">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center py-16 container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
          <p className="text-xl md:text-2xl opacity-95">
            期待与您合作，共同创造品牌价值
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-text mb-8">联系方式</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 text-accent mr-4 flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {/* 标签图标，代表编号/标识 */}
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    邮编
                  </h3>
                  <p className="text-text-light">100054</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 text-accent mr-4 flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    地址
                  </h3>
                  <p className="text-text-light">
                    北京市宣武区白纸坊西街20号圣都大厦310室
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 text-accent mr-4 flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    邮箱
                  </h3>
                  <a
                    href="mailto:hr@teamline.cn"
                    className="text-accent hover:underline"
                  >
                    hr@teamline.cn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


