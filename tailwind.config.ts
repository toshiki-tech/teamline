import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 品牌色彩 - 基于原站保留
        primary: {
          DEFAULT: '#333333', // 主色：深灰色（Header背景）
        },
        accent: {
          DEFAULT: '#dc3545', // 强调色：红色（激活状态、CTA按钮）
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
          lighter: '#999999',
        },
        bg: {
          DEFAULT: '#ffffff',
          alt: '#f8f9fa',
        },
        border: {
          DEFAULT: '#e5e5e5',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        // 8px 基准间距系统
        '18': '4.5rem', // 72px
        '88': '22rem',  // 352px
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          md: '2rem',
        },
        screens: {
          DEFAULT: '100%',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      },
    },
  },
  plugins: [],
}
export default config


