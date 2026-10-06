import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Amr Abed | Courses",
  description: "Course Archives and Lecture Materials",
  base: "/courses/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CSE415 (Cloud Computing)', link: '/cse415/' },
      { text: 'CSE115 (Programming)', link: '/cse115/' },
      { text: 'CSE422 (Controlled Systems)', link: '/cse422/' }
    ],

    sidebar: [
      {
        text: 'Courses',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'CSE415 Cloud Computing', link: '/cse415/' },
          { text: 'CSE115 Programming Languages', link: '/cse115/' },
          { text: 'CSE422 Computer Controlled Systems', link: '/cse422/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/amrabed/courses' }
    ],

    footer: {
      message: 'Released under the <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution 4.0 International (CC BY 4.0)</a> License.',
      copyright: 'Copyright © Amr Abed'
    }
  }
})
