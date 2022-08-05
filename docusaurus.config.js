// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/shadesOfPurple");

/**
 * @typedef {import('@docusaurus/theme-common/src/utils/useThemeConfig').NavbarItem} NavbarItem
 */

/** @type {(s: string,p: "left" | "right" | undefined, noHeight: boolean) => NavbarItem} TypeScript syntax */
function __space__(s, p, noHeight = false) {
  return {
    href: "#",
    className: `space-${s} ${noHeight ? "no-height" : ""}`,
    position: p,
  };
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Blueprint System",
  tagline: "Documentations",
  url: "https://github.com",
  baseUrl: "/blueprint_system_docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",

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
          routeBasePath: "docs",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/salah-rashad/blueprint_system_docs/tree/master/",
          includeCurrentVersion: true,
          versions: {
            current: {
              badge: true,
              label: "Next 🚧",
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/salah-rashad/blueprint_system_docs/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "api",
        routeBasePath: "api",
        sidebarPath: require.resolve("./sidebars.js"),
        disableVersioning: false,
        lastVersion: "current",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // style: "dark",
        title: "Blueprint System",
        logo: {
          alt: "Blueprint System Logo",
          src: "img/logo.png",
        },
        items: [
          __space__("32", "left", true),
          {
            to: "/docs",
            position: "left",
            label: "Docs",
          },
          {
            to: "/api",
            position: "left",
            label: "API",
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
          __space__("32", "right"),
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          __space__("64", "right"),
          {
            to: "demo",
            label: "Demo",
            position: "right",
          },
          {
            href: "https://github.com/salah-rashad/blueprint_system",
            position: "right",
            className: "header-github-link",
            title: "GitHub repository",
          },
          {
            href: "https://pub.dev/packages/blueprint_system",
            position: "right",
            className: "header-pub-link",
            title: "Pub package",
          },
          // {
          //   href: "https://pub.dev/packages/blueprint_system",
          //   label: "Pub",
          //   position: "right",
          // },
          __space__("32", "right"),
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Tools",
            items: [
              {
                label: "Docs",
                to: "/docs",
              },
              {
                label: "API",
                to: "/api",
              },
            ],
          },
          {
            title: "Salah Rashad",
            items: [
              {
                label: "About",
                to: "about-me",
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
