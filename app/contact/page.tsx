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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
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

                <div className="flex items-start">
                  <div className="w-12 h-12 text-accent mr-4 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text mb-2">
                      网址
                    </h3>
                    <a
                      href="https://www.teamline.cn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      https://www.teamline.cn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Placeholder) */}
            <div>
              <h2 className="text-3xl font-bold text-text mb-8">在线留言</h2>
              <div className="bg-gray-50 p-8 rounded-lg border border-border">
                <p className="text-text-light mb-4">
                  如需咨询或合作，请通过以下方式联系我们：
                </p>
                <ul className="space-y-2 text-text-light mb-6">
                  <li>• 发送邮件至 hr@teamline.cn</li>
                  <li>• 或通过其他联系方式与我们沟通</li>
                </ul>
                <p className="text-sm text-text-lighter">
                  （表单功能可根据实际需求开发）
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


