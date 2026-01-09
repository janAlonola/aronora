import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/aronora/',

  lang: 'en-GB',
  title: 'Aronora',
  description: 'Articles & Projects',

  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/articles.html' },
      { text: 'About Me', link: '/about.html' },
    ],
  }),
})
