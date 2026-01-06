import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { casesData } from '@/lib/cases-data'

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
      <section className="relative min-h-[50vh] flex items-center justify-center text-white bg-primary">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center py-16 container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {caseItem.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-95">{caseItem.tag}</p>
        </div>
      </section>

      {/* Case Detail */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Main Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-12">
              <Image
                src={caseItem.image}
                alt={caseItem.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Case Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold text-text mb-4">
                  项目信息
                </h3>
                <dl className="space-y-3 text-text-light">
                  <div>
                    <dt className="font-medium text-text">客户</dt>
                    <dd>{caseItem.client}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-text">年份</dt>
                    <dd>{caseItem.year}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-text">服务内容</dt>
                    <dd>{caseItem.service}</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text mb-4">
                  项目描述
                </h3>
                <p className="text-text-light leading-relaxed">
                  {caseItem.description}
                </p>
              </div>
            </div>

            {/* Additional Images */}
            {caseItem.images.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {caseItem.images.slice(1).map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={img}
                      alt={`${caseItem.title} ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Back Button */}
            <div className="text-center">
              <Link
                href="/works"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-text text-text rounded font-medium hover:bg-text hover:text-white transition-all"
              >
                返回案例列表
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


