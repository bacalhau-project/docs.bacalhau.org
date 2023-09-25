// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const redirects = require('./redirects');

const simplePlantUML = require("@akebifiky/remark-simple-plantuml");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bacalhau Docs",
  tagline: "Docs for Bacalhau",
  url: "https://docs.bacalhau.org/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",
  organizationName: "bacalhau-project", // Usually your GitHub org/user name.
  projectName: "docs.bacalhau.org", // Usually your repo name.
  scripts: [
    { src: 'https://plausible.io/js/plausible.js', async: true, defer: true, 'data-domain': 'docs.bacalhau.org' },
    {
      type: 'text/javascript',
      innerHTML: `
        !function(t){if(window.ko)return;window.ko=[],["identify","track","removeListeners","open","on","off","qualify","ready"].forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/pk_0946cebbb244e71a555bce34b10b6c0daed9/sdk.js"),(document.body || document.head).appendChild(n)}();
        `,
    },
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/`,
          remarkPlugins: [simplePlantUML],
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        gtag: {
          trackingID: 'G-10GYL172V9',
        },
        theme: {
          customCss: [require.resolve('./static/css/custom.css')],
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      image: '/static/logo_assets/Icon/JPG/Bacalhau-icon.jpg',
      navbar: {
        title: "Bacalhau Docs",
        logo: {
          alt: "Bacalhau Docs Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/bacalhau-project/bacalhau",
            position: "right",
            className: "header-github-link",
          },
        ],
      },
      metadata: [{name: 'keywords', content: 'Bacalhau Docs contains ifnormation for fast, cost efficient, and secure computation by explaining how to run jobs where the data is generated and stored.'}],
      image: 'img/logo.png',
      blog: false,
      algolia :{
        appId: '15JCWQAGM1',
        apiKey: '39072848f0a096cfb14729dd0ece6ce7',
        indexName: 'dev_bac'
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "Getting Started",
                to: "/getting-started/installation",
              },
              {
                label: "Examples",
                to: "https://docs.bacalhau.org/examples/",
              },
              {
                label: "FAQs",
                to: "https://docs.bacalhau.org/troubleshooting/faqs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discussions",
                href: "https://github.com/bacalhau-project/bacalhau/discussions",
              },
              {
                label: "Slack",
                href: "https://join.slack.com/t/bacalhauproject/shared_invite/zt-1sihp4vxf-TjkbXz6JRQpg2AhetPzYYQ",
              },
            ],
          },
          {
            title: "Develop/Contribute",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/bacalhau-project/bacalhau",
              },
              {
                label: "Changelog",
                href: "https://github.com/bacalhau-project/bacalhau/releases/",
              },
              {
                label: "Ways To Contribute",
                href: "https://docs.bacalhau.org/community/ways-to-contribute/",
              },
            ],
          },
          {
            title: "Socials",
            items: [
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UCUgZfGPLRxnxpUK3tSLsmMg",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/BacalhauProject",
              },
              {
                label: "Blog/Newsletter",
                href: "https://bacalhau.substack.com/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bacalhau, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        lightTheme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      /*
      announcementBar: {
        id: 'event-announcement',
        content:
          'Announcing <a target="_blank" rel="noopener noreferrer" href="https://www.codsummit.io/"><strong>COD Summit^3</strong></a> &nbsp; &nbsp; &nbsp; May 9th-10th, 2023 / Boston, MA Support',
        backgroundColor: '#0055FF',
        textColor: '#fff',
        isCloseable: false,
      },
      */
    }),

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: redirects,
      },
    ],
  ],
};

module.exports = config;
