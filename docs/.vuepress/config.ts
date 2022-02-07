import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/js-tutorial/',
  lang: 'zh-CN',
  title: 'Javascript 教程',

  theme: '@vuepress/theme-default'
})
