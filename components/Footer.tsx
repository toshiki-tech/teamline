import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 border-t border-gray-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              快速链接
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3 mt-6">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  专业服务
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  成功案例
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  加入我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              联系方式
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <div className="space-y-4 text-gray-400 text-sm mt-6">
              {/* 联系电话图片 */}
              <div className="bg-white p-3 rounded-lg">
                <Image
                  src="/assets/images/footer/foot1.png"
                  alt="联系电话"
                  width={286}
                  height={107}
                  className="w-full h-auto"
                />
              </div>
              <p className="leading-relaxed">北京市宣武区白纸坊西街20号圣都大厦310室</p>
            </div>
          </div>

          {/* 关注我们 - 微信二维码 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              关注我们
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <div className="space-y-4 mt-6">
              <div className="inline-block p-3 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/assets/images/footer/foot_code.png"
                  alt="微信二维码"
                  width={120}
                  height={162}
                  className="w-auto h-auto"
                />
              </div>
              <p className="text-gray-400 text-sm">扫描二维码关注我们</p>
            </div>
          </div>

          {/* 公司信息 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              公司信息
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <div className="space-y-3 text-gray-400 text-sm leading-relaxed mt-6">
              <p>天昊润蓝成立于2002年，23年+专业广告传播服务经验，与多家金融企业、政府单位及互联网企业深度合作。</p>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            © 2002-2025 北京天昊润蓝广告有限公司{' '}
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              京ICP备09012609号
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

