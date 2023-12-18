// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const username = "yuanxin518";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Circkoooooo",
  tagline: "this is my blog",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: `https://${username}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: `${username}`, // Usually your GitHub org/user name.
  projectName: `${username}.github.io`, // Usually your repo name.
  deploymentBranch: "main",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          showLastUpdateTime: false,
        },
        // blog: false,
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          blogSidebarTitle: "所有内容",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content: "前端 react webpack redux git",
        },
      ],
      blog: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Yuanxin",
        // logo: {
        //   // alt: "网站图标",
        //   // src: "img/logo.svg",
        //   // width: 32,
        //   // height: 32,
        // },
        items: [
          {
            to: `https://github.com/${username}`,
            label: "Github",
            position: "right",
          },
          {
            to: "/blog",
            label: "博客",
            position: "left",
          },
        ],
      },
      algolia: {
        // Algolia 提供的应用 ID
        appId: "58UO1EPKN3",

        //  公开 API 密钥：提交它没有危险
        apiKey: "2f17d06a497d3938db2fd63704e1aeb7",

        indexName: `${username}`,
        startUrls: [`https://${username}.github.io`],
        sitemaps: [`https://${username}.github.io/sitemap.xml`],
        // 可选：见下文
        contextualSearch: true,

        // 可选：声明哪些域名需要用 window.location 型的导航而不是 history.push。 适用于 Algolia 配置会爬取多个文档站点，而我们想要用 window.location.href 在它们之间跳转时。
        // externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: "/docs/", // or as RegExp: /\/docs\//
        //   to: "/",
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
    }),
};

module.exports = config;
