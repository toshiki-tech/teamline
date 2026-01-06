export interface Case {
  id: number
  title: string
  category: string
  tag: string
  description: string
  image: string
  images: string[]
  client: string
  year: string
  service: string
}

export const casesData: Case[] = [
  {
    id: 1,
    title: '空间展示案例',
    category: 'space',
    tag: '空间展示',
    description:
      '专业的空间展示设计，打造沉浸式品牌体验空间。将品牌理念融入空间设计，创造令人印象深刻的视觉体验。',
    image: '/assets/images/cases/homecase_01.jpg',
    images: ['/assets/images/cases/homecase_01.jpg'],
    client: '展览中心',
    year: '2023',
    service: '空间设计、展览设计',
  },
  {
    id: 2,
    title: '品牌策划案例',
    category: 'brand',
    tag: '品牌策划',
    description:
      '为知名企业打造完整的品牌识别系统，提升品牌价值和市场认知度。通过深入的品牌调研和策略规划，建立了独特的品牌定位。',
    image: '/assets/images/cases/homecase_02.jpg',
    images: ['/assets/images/cases/homecase_02.jpg'],
    client: '知名企业',
    year: '2023',
    service: '品牌策划、视觉识别',
  },
  {
    id: 3,
    title: '数字营销案例',
    category: 'digital',
    tag: '数字营销',
    description:
      '数字化营销解决方案，提升品牌在线影响力和用户 engagement。通过数据驱动的策略和创新的内容营销，实现品牌突破。',
    image: '/assets/images/cases/homecase_03.jpg',
    images: ['/assets/images/cases/homecase_03.jpg'],
    client: '互联网企业',
    year: '2023',
    service: '数字营销、内容营销',
  },
  {
    id: 4,
    title: '视觉创意案例',
    category: 'visual',
    tag: '视觉创意',
    description:
      '创新视觉设计，为品牌注入活力，传达独特的品牌个性。通过独特的创意视角和专业的视觉表现，成功塑造品牌形象。',
    image: '/assets/images/cases/homecase_04.jpg',
    images: ['/assets/images/cases/homecase_04.jpg'],
    client: '创意品牌',
    year: '2023',
    service: '视觉设计、创意设计',
  },
  {
    id: 5,
    title: '交互视觉案例',
    category: 'interaction',
    tag: '交互视觉',
    description:
      'UI/UX设计，提升用户体验和产品易用性。以用户为中心，设计直观、美观、易用的交互界面，实现用户体验的显著提升。',
    image: '/assets/images/cases/homecase_05.jpg',
    images: ['/assets/images/cases/homecase_05.jpg'],
    client: '科技公司',
    year: '2023',
    service: 'UI/UX设计、交互设计',
  },
  {
    id: 6,
    title: '公关策划案例',
    category: 'pr',
    tag: '公关策划',
    description:
      '品牌公关活动策划与执行，提升品牌影响力和美誉度。通过精心策划的公关活动，成功提升品牌在目标受众中的认知度。',
    image: '/assets/images/cases/homecase_06.jpg',
    images: ['/assets/images/cases/homecase_06.jpg'],
    client: '知名品牌',
    year: '2023',
    service: '公关策划、活动执行',
  },
  {
    id: 7,
    title: '品牌策划案例二',
    category: 'brand',
    tag: '品牌策划',
    description:
      '全面的品牌策略规划，从定位到视觉系统，打造差异化品牌形象。为客户建立了独特的品牌识别体系。',
    image: '/assets/images/cases/homecase_07.jpg',
    images: ['/assets/images/cases/homecase_07.jpg'],
    client: '企业客户',
    year: '2023',
    service: '品牌策划、品牌设计',
  },
  {
    id: 8,
    title: '视觉创意案例二',
    category: 'visual',
    tag: '视觉创意',
    description:
      '专业的视觉设计服务，包括平面设计、视觉识别系统等创意设计。以独特的创意视角，将品牌理念转化为视觉作品。',
    image: '/assets/images/cases/homecase_08.jpg',
    images: ['/assets/images/cases/homecase_08.jpg'],
    client: '设计品牌',
    year: '2023',
    service: '视觉设计、平面设计',
  },
  {
    id: 9,
    title: '空间展示案例二',
    category: 'space',
    tag: '空间展示',
    description:
      '商业空间设计与展示，打造专业的品牌展示空间。将品牌理念融入空间设计，创造令人印象深刻的展示效果。',
    image: '/assets/images/cases/homecase_09.jpg',
    images: ['/assets/images/cases/homecase_09.jpg'],
    client: '商业中心',
    year: '2023',
    service: '空间设计、展示设计',
  },
  {
    id: 10,
    title: '数字营销案例二',
    category: 'digital',
    tag: '数字营销',
    description:
      '数字时代的营销解决方案，包括社交媒体运营、内容营销等。运用数据驱动的策略，帮助品牌建立影响力。',
    image: '/assets/images/cases/homecase_10.jpg',
    images: ['/assets/images/cases/homecase_10.jpg'],
    client: '互联网企业',
    year: '2023',
    service: '数字营销、社交媒体',
  },
]

export const categories = [
  { id: 'all', label: '全部' },
  { id: 'brand', label: '品牌策划' },
  { id: 'visual', label: '视觉创意' },
  { id: 'digital', label: '数字营销' },
  { id: 'space', label: '空间展示' },
  { id: 'interaction', label: '交互视觉' },
  { id: 'pr', label: '公关策划' },
]


