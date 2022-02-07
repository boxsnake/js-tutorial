import type { SidebarConfig } from '@vuepress'
import { prefixer } from '../utils/url'

const urlPrefix : string = 'en-US'

export const enUS : SidebarConfig = [
    prefixer(urlPrefix, '/README.md'),
    {
        text: 'Basic',
        collapsible: true,
        children: []
    }
]
