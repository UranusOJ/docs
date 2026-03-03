import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'UranusOJ 文档',
  description: '使用 Hydro 构建的稳定，插件开源的 Online-Judge 系统。',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '插件开源', link: '/opensource' },
      { text: '关于', link: '/about-uranusoj' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '关于 UranusOJ', link: '/about-uranusoj' },
          { text: '插件开源', link: '/opensource' },
        ]
      },
      {
        text: '社区规则',
        items: [
          { text: '社区规则', link: '/community-rule' },
          { text: '学术规范', link: '/academic-norms' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/UranusOJ/docs' }
    ],
    footer: {
      message: '基于 LGPL 3.0 协议开源',
      copyright: 'Copyright © 2026 UranusOJ'
    },
    editLink: {
      pattern: 'https://github.com/UranusOJ/docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 最后更新时间
    lastUpdated: true,
    lastUpdatedText: '最后更新'
  },
  lastUpdated: true,
  cleanUrls: true
})
