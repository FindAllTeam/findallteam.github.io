import { defineConfig,DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
const zhThemeConfig: DefaultTheme.Config | undefined = {
  logo: "/headlogo.svg",
  nav: [
    { text: '简介', link: '/zh/introduction' }
  ],
  socialLinks: [
    { icon: 'github', link: 'https://github.com/FindAllTeam/FindAll' }
  ],
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2024-present FindAllTeam'
  }
}


const enThemeConfig: DefaultTheme.Config | undefined = {
  logo: "/headlogo.svg",
  nav: [
    { text: 'Introduction', link: '/introduction' }
  ],
  socialLinks: [
    { icon: 'github', link: 'https://github.com/FindAllTeam/FindAll' }
  ],
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2024-present FindAllTeam'
  }
}


export default defineConfig({
  title: "FindAll",
  description: "FindAll",
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig:enThemeConfig,
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      link: "/zh/",
      themeConfig: zhThemeConfig,
    },
  },
})
