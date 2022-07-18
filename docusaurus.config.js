// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/shadesOfPurple");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Blueprint System",
  tagline: "Documentations",
  url: "https://github.com",
  baseUrl: "/blueprint_system_docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "salah-rashad", // Usually your GitHub org/user name.
  projectName: "blueprint_system_docs", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      navbar: {
        // style: "dark",
        title: "Blueprint System",
        // logo: {
        //   alt: "Blueprint System Logo",
        //   src: "img/logo.svg",
        // },
        items: [
          {
            type: "doc",
            docId: "getting-started",
            position: "left",
            label: "Docs",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            label: "Community",
            position: "left",
            items: [
              {
                href: "#",
                label: "🎨 Themes",
              },
            ],
          },
          {
            href: "#",
            label: "  ",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            href: "#",
            label: "  ",
            position: "right",
          },
          {
            href: "#",
            label: "Demo",
            position: "right",
          },
          {
            href: "https://github.com/salah-rashad/blueprint_system",
            position: "right",
            className: "header-image-link header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://pub.dev/packages/blueprint_system",
            position: "right",
            className: "header-image-link header-pub-link",
            "aria-label": "Pub package",
          },
          // {
          //   href: "https://pub.dev/packages/blueprint_system",
          //   label: "Pub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "DOCS",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "SALAH RASHAD",
            items: [
              {
                label: "About",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Contact",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "MORE",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                href: "https://github.com/salah-rashad/blueprint_system",
                label: "GitHub",
              },
              {
                href: "https://pub.dev/packages/blueprint_system",
                label: "Pub",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Blueprint System`,
        // copyright: `Developed with ❤️ by Salah Rashad`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "dart",
      },
    }),
};

module.exports = config;
