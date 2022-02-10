import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import configs from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/js-tutorial/',
  dest: 'docs',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Javascript 教程',
      description: '初学者的 Javascript 教程。'
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'Javascript Tutorial',
      description: 'A Javascript tutorial for starters.'
    }
  },

  theme: '@vuepress/theme-default',
  themeConfig: {
    sidebarDepth: 0,
    locales: {
      '/': {
        selectLanguageText: '选择语言',
        selectLanguageName: '简体中文',
        sidebar: configs.sidebar.zhCN
      },
      '/en-US/': {
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        sidebar: configs.sidebar.enUS
      }
    }
  }
})
