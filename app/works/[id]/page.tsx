import { notFound } from 'next/navigation'
import Link from 'next/link'
import { casesData } from '@/lib/cases-data'
import CaseImageGallery from '@/components/CaseImageGallery'

export async function generateStaticParams() {
  return casesData.map((item) => ({
    id: item.id.toString(),
  }))
}

export default function CaseDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const caseItem = casesData.find(
    (item) => item.id === parseInt(params.id)
  )

  if (!caseItem) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="relative z-10 text-center py-16 container-custom">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-accent text-white text-sm font-medium rounded-full">
              {caseItem.tag}
            </span>
          </div>
          <h1 className="heading-hero mb-6 text-white">
            {caseItem.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-95 text-white leading-relaxed max-w-3xl mx-auto">
            {caseItem.description}
          </p>
        </div>
      </section>

      {/* Case Detail */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            {/* Image Gallery */}
            <div className="mb-16">
              <CaseImageGallery images={caseItem.images} title={caseItem.title} />
            </div>

            {/* Case Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* 项目信息卡片 */}
              <div className="lg:col-span-1">
                <div className="bg-bg-alt rounded-lg p-8 shadow-sm border border-border sticky top-24">
                  <h3 className="text-xl font-bold text-text mb-6 pb-4 border-b border-border">
                    项目信息
                  </h3>
                  <dl className="space-y-6">
                    <div>
                      <dt className="text-sm font-medium text-text-lighter mb-2">
                        客户
                      </dt>
                      <dd className="text-lg font-semibold text-text">
                        {caseItem.client}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-text-lighter mb-2">
                        年份
                      </dt>
                      <dd className="text-lg font-semibold text-text">
                        {caseItem.year}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-text-lighter mb-2">
                        服务内容
                      </dt>
                      <dd className="text-lg font-semibold text-text">
                        {caseItem.service}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-text-lighter mb-2">
                        项目类型
                      </dt>
                      <dd className="text-lg font-semibold text-text">
                        {caseItem.tag}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* 项目描述 */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2 className="heading-subsection text-text mb-6">
                    项目概述
                  </h2>
                  <div className="text-body-lg space-y-6">
                    <p>
                      {caseItem.description}
                    </p>
                    <p>
                      通过深入的市场调研和专业的创意策划，我们为{caseItem.client}打造了独特的品牌传播方案。项目涵盖了从策略规划到视觉执行的完整流程，最终实现了品牌价值的显著提升。
                    </p>
                    <p>
                      在项目执行过程中，我们注重每一个细节，确保创意理念的完整呈现。通过科学的管理机制和专业的执行能力，项目获得了客户的高度认可，并在行业内树立了良好的口碑。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
              <Link
                href="/works"
                className="inline-flex items-center gap-2 text-text hover:text-accent transition-colors font-medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                返回案例列表
              </Link>

              {/* 分享按钮（可选） */}
              <div className="flex items-center gap-4">
                <span className="text-text-light text-sm">分享案例：</span>
                <button
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="分享到微信"
                >
                  <svg
                    className="w-5 h-5 text-text"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.052-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 4.004-1.98 5.947-1.838-.576-3.583-4.196-6.348-8.496-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.179c0-.651.52-1.18 1.162-1.18zm6.43 2.657c-2.496 0-4.576 1.512-5.093 3.55-.142.563-.195 1.165-.142 1.768.054.603.213 1.188.469 1.728.853 1.788 2.409 3.048 4.206 3.048a.59.59 0 0 1 .59.59v1.48c0 .07.02.14.048.213a.29.29 0 0 0 .29.295c.057 0 .112-.02.167-.054l1.903-1.114a.864.864 0 0 1 .717-.098c.92.276 1.888.403 2.837.403 4.8 0 8.691-3.288 8.691-7.342 0-4.053-3.891-7.342-8.691-7.342zm-1.162 4.721c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.179c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.179c0-.651.52-1.18 1.162-1.18z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


