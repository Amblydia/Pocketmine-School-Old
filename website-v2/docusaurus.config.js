module.exports = {
  title: 'Pocketmine School',
  tagline: 'A Website That Teaches You About PocketMine Plugin Development',
  url: 'https://teamultrasoft.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'TeamUltraSoft', // Usually your GitHub org/user name.
  projectName: 'Pocketmine-School', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '\u2600',
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Pocketmine School',
        src: 'img/pocketmineschool-wbg.png',
      },
      items: [
        {to: '/', label: 'Home', position: 'right'},
        {to: 'tutorials', label: 'Tutorials', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tutorials',
          items: [
            {
              label: 'How to make a Plugin',
              to: 'htmap/introduction',
            },
            {
              label: 'How to use FormAPI',
              to: 'htufa/introduction',
            },
          ],
        },
        {
          title: 'Communtiy ',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/EvUyyS7',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UltraSoft.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
