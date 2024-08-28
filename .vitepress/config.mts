import { defineConfig,DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
const zhThemeConfig: DefaultTheme.Config | undefined = {
  logo: "/headlogo.svg",
  nav: [
    { text: '简介', link: '/zh/introduction' },
    { text: '友情链接', items:[
      { text: "前端徐徐", link: 'https://taotaoxu.com' },
      { text: '悟空壁纸', link: 'https://github.com/Xutaotaotao/wukong-wallpaper' },
      { text: 'ElectronProkit', link: 'https://xutaotaotao.github.io/electron-prokit' },
      { text: 'XTools', link: 'https://taotaoxu.com/XTools' },
      { text: 'GetInstalledApps', link: 'https://github.com/Xutaotaotao/get-installed-apps' },
    ]}
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
    { text: 'Introduction', link: '/introduction' },
    { text: 'Friendly links', items:[
      { text: "Xuxu's Blog ", link: 'https://taotaoxu.com' },
      { text: 'ElectronProkit', link: 'https://xutaotaotao.github.io/electron-prokit' },
      { text: 'XTools', link: 'https://taotaoxu.com/XTools' },
      { text: 'GetInstalledApps', link: 'https://github.com/Xutaotaotao/get-installed-apps' },
      { text: 'WukongWallpaper', link: 'https://github.com/Xutaotaotao/wukong-wallpaper' },
    ]}
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
  head: [
    [
      "meta",
      {
        name: "keywords",
        content:
          "FindAll, FindAllTeam, FindAll 团队, FindAll 团队官网, 一款自动化分析网络安全应急响应工具, 网络安全应急响应工具, 网络安全工具, FindAll网络安全应急响应工具, FindAll团队, FindAll团队官网, FindAll团队博客, FindAll 团队博客, FindAll 团队博客网站, FindAll 团队博客网站建设, FindAll 团队博客网站建设公司, FindAll 团队博客网站建设公司网站, FindAll 团队博客网站建设公司网站建设, FindAll 团队博客网站建设公司网站建设公司, FindAll 团队博客网站建设公司网站建设公司网站",
      },
    ],
  ],
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
