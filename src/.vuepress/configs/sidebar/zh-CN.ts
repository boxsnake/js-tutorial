import type { SidebarConfig } from 'vuepress'
import { prefixer } from '../utils/url'

const urlPrefix : string = ''

export const zhCN : SidebarConfig = [
  prefixer(urlPrefix, '/README.md'),
  {
    text: '基础',
    collapsible: true,
    children: []
  }
]
