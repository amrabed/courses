import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

const base = (process.env.BASE_PATH || (process.env.VERCEL ? '/' : '/courses/')) as `/${string}/` | '/'

export default defineConfig({
  title: "Amr Abed / Courses",
  description: "Course Archives and Lecture Materials",
  base,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://amrabed.com/brand/icon.svg' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://amrabed.com/brand/icon-light.svg', media: '(prefers-color-scheme: light)' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://amrabed.com/brand/icon-dark.svg', media: '(prefers-color-scheme: dark)' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://amrabed.com/brand/apple-touch-icon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CSE115 (Programming)', link: '/cse115/' },
      { text: 'CSE415 (Cloud Computing)', link: '/cse415/' },
      { text: 'CSE422 (Controlled Systems)', link: '/cse422/' }
    ],

    sidebar: [
      {
        text: 'Courses',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'CSE115 Programming Languages', link: '/cse115/' },
          { text: 'CSE415 Cloud Computing', link: '/cse415/' },
          { text: 'CSE422 Computer Controlled Systems', link: '/cse422/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/amrabed/courses' }
    ]
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPNavBarTitle.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPFooter.vue', import.meta.url)
          )
        }
      ]
    }
  }
})
