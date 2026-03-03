import { defineConfigWithTheme } from 'vitepress'
export default {
  // 应用级配置选项
  lang: 'zh-CN',
  title: 'UranusOJ 文档',
  description: '使用 Hydro 构建的稳定，插件开源的 Online-Judge 系统。'
  sidebar: [
      {
        text: '导航',
        items: [
          { text: '关于 UranusOJ', link: '/about-uranusoj' }
        ]
      }
    ]
}
