# Teamline 官网 - Next.js 重构版

基于 Next.js 14 (App Router) + TypeScript + Tailwind CSS 重构的企业官网。

## 📋 技术栈

- **Next.js 14** - 使用 App Router
- **TypeScript** - 类型安全
- **Tailwind CSS** - 实用优先的 CSS 框架
- **React 18** - UI 库

## 🎨 设计决策

### CSS 方案选择：Tailwind CSS

选择 Tailwind CSS 的理由：
1. **开发效率高** - 实用类快速构建 UI
2. **响应式设计简单** - 内置响应式前缀（sm:, md:, lg:）
3. **维护性好** - 样式与组件代码在一起，易于管理
4. **性能优化** - 生产环境自动去除未使用的样式
5. **现代化工具链** - 与 Next.js 集成良好
6. **设计系统** - 通过 tailwind.config.ts 统一管理品牌色彩

### 品牌色彩配置

在 `tailwind.config.ts` 中配置了品牌色彩：
- **主色**: `#333333` (深灰色 - Header背景)
- **强调色**: `#dc3545` (红色 - 激活状态、CTA按钮)
- **文本色**: `#333333`, `#666666`, `#999999`
- **背景色**: `#ffffff`, `#f8f9fa`

## 📁 项目结构

```
teamline/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局（包含 Header 和 Footer）
│   ├── page.tsx           # 首页 (/)
│   ├── about/             # 关于我们页面
│   ├── services/          # 服务页面
│   ├── works/             # 案例展示页面
│   │   └── [id]/          # 案例详情页（动态路由）
│   └── contact/           # 联系我们页面
├── components/            # React 组件
│   ├── Header.tsx         # 导航栏组件
│   ├── Footer.tsx         # 页脚组件
│   └── Logo.tsx           # Logo 组件
├── lib/                   # 工具函数和数据
│   └── cases-data.ts      # 案例数据
├── public/                # 静态资源
│   └── assets/            # 图片和视频
└── styles/                # 全局样式
    └── globals.css        # Tailwind CSS 入口
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm start
```

## 📄 页面说明

### 首页 (/)
- Hero 区域（视频背景）
- 服务展示（6项服务）
- 精选案例展示
- 公司优势
- 关于我们简介

### 关于我们 (/about)
- 公司介绍
- 公司数据统计
- 核心理念（4个价值观）
- 办公环境展示

### 服务 (/services)
- 6项专业服务详细介绍
- 每项服务的特色功能列表
- CTA 区域

### 案例展示 (/works)
- 案例筛选（按类别）
- 案例网格展示
- 案例详情页（动态路由 `/works/[id]`）

### 联系我们 (/contact)
- 联系方式展示
- 在线留言区域（占位）

## 🎯 特性

### SSR/SSG 支持
- 所有页面支持服务端渲染（SSR）
- 静态页面支持静态生成（SSG）
- 案例详情页使用 `generateStaticParams` 进行静态生成

### 响应式设计
- 移动端优先设计
- 断点：`sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1200px)
- 移动端导航使用折叠菜单

### Logo SVG
- Logo 组件使用 SVG（当前为占位版本）
- 建议使用设计工具将原始 logo.png 转换为精确的 SVG 路径
- 确保在 Retina 屏幕上清晰显示

### 性能优化
- Next.js Image 组件优化图片加载
- 自动代码分割
- 生产环境优化

## 📝 注意事项

1. **Logo SVG**: 当前 Logo 组件使用文本占位，实际应替换为精确的 SVG 路径。可以使用在线工具（如 [SVGOMG](https://jakearchibald.github.io/svgomg/)）将 PNG 转换为 SVG。

2. **图片资源**: 所有图片已从 `assets/` 目录复制到 `public/assets/` 目录。

3. **视频资源**: Hero 视频位于 `public/assets/videos/hero-video.mp4`。

4. **内容更新**: 
   - 案例数据在 `lib/cases-data.ts` 中管理
   - 服务数据在 `app/services/page.tsx` 中定义
   - 可根据需要提取到独立的数据文件

5. **表单功能**: 联系页面中的表单为占位内容，实际表单功能需要根据后端 API 进行开发。

## 🔄 从旧版迁移

本项目保留了原有 HTML 版本的所有内容，包括：
- 所有文案和图片
- 品牌色彩方案
- 页面结构和内容

同时升级为：
- 现代化的 React 组件架构
- TypeScript 类型安全
- Next.js 的 SSR/SSG 能力
- Tailwind CSS 的响应式设计系统

## 📦 部署

可以部署到：
- Vercel（推荐，Next.js 官方平台）
- Netlify
- 自托管服务器（使用 `npm run build && npm start`）

## 📄 许可证

版权所有 © 2002-2025 北京天昊润蓝广告有限公司

