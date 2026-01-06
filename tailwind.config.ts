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
          'Source Han Sans CN',
          'Noto Sans SC',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
        'sm': ['0.875rem', { lineHeight: '1.7', letterSpacing: '0.02em' }],
        'base': ['1rem', { lineHeight: '1.75', letterSpacing: '0.01em' }],
        'lg': ['1.125rem', { lineHeight: '1.9', letterSpacing: '0.015em' }],
        'xl': ['1.25rem', { lineHeight: '1.75', letterSpacing: '0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
      },
      lineHeight: {
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.75',
        'loose': '2',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.02em',
        'normal': '0',
        'wide': '0.05em',
        'wider': '0.1em',
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


