const { defaultTheme } = require("@vuepress/theme-default"); // 主题
const { searchPlugin } = require("@vuepress/plugin-search"); // 本地搜索
const { backToTopPlugin } = require("@vuepress/plugin-back-to-top"); // 返回顶部
const {
  registerComponentsPlugin,
} = require("@vuepress/plugin-register-components"); // 注册vue组件
const { path } = require("@vuepress/utils");

module.exports = {
  lang: "zh-CN",
  title: "Jazh的博客",
  description: "前端, 工具, 框架, Vue, React, Node等",
  head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
  theme: defaultTheme({
    home: "/",
    sidebar: "auto",
    navbar: [{ text: "首页", link: "/" }],
    logo: "/images/logo.png",
    colorModeSwitch: false,
    lastUpdatedText: "最后更新时间",
    contributors: false,
  }),
  plugins: [
    backToTopPlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"), // 自动注册该目录下的组件
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
};
