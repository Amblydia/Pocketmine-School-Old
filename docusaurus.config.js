const config = {
  title: 'PocketMine School',
  tagline: 'A Website To Teach Everything About PocketMine-MP',
  url: 'https://pocketmineschool.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'PocketMine School', 
  projectName: 'Pocketmine-School', 

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/tutorials',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/PocketMine-School/Pocketmine-School/tree/master',
          breadcrumbs: false,
        },
        googleAnalytics: {
          trackingID: 'UA-179045405-3',
          anonymizeIP: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [require.resolve("@easyops-cn/docusaurus-search-local"), {
      docsRouteBasePath: "/tutorials",
      docsDir: "tutorials",
    }],
  ],

  themeConfig: {
    image: 'img/pocketmineschool.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    prism: {
      additionalLanguages: ['php', 'yaml'],
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Pocketmine School',
        src: 'img/pocketmineschool.png',
        srcDark: 'img/pocketmineschool-wbg.png',
      },
      items: [
        {
          to: 'tutorials/', 
          label: 'Tutorials', 
          position: 'right'
        },
        {
          href: 'https://github.com/PocketMine-School/Pocketmine-School', 
          label: 'Source Code', 
          position: 'right',
          className: 'github-icon',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'PocketMine School Discord',
              href: 'https://discord.gg/5e7PFEXgF3',
            },
            {
              label: 'UltraSoft Discord',
              href: 'https://discord.gg/EvUyyS7',
            },
            {
              label: 'KygekTeam Discord',
              href: 'https://discord.gg/CXtqUZv',
            },
          ],
        },
        {
          title: 'Other Links',
          items: [
            {
              label: 'Source Code',
              href: 'https://github.com/PocketMine-School/Pocketmine-School',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <strong><a href="https://github.com/PocketMine-School">PocketMine School</a></strong>.`,
    },
  },

};

module.exports = config;