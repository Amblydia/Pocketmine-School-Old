module.exports = {
  title: 'PocketMine School',
  tagline: 'A Website To Teach Everything About PocketMine-MP',
  url: 'https://pocketmineschool.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'PocketMine School', // Usually your GitHub org/user name.
  projectName: 'Pocketmine-School', // Usually your repo name.
  plugins: [
    [require.resolve("@easyops-cn/docusaurus-search-local"), {
      docsRouteBasePath: "/tutorials",
      docsDir: "tutorials",
    }]
  ],
  themeConfig: {
    image: 'img/pocketmineschool.png',
    hideableSidebar: true,
    googleAnalytics: {
      trackingID: 'UA-179045405-3',
      anonymizeIP: true,
    },
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
    prism: {
      additionalLanguages: ['php', 'yaml'],
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    announcementBar: {
      id: 'contribute',
      content: 'We are looking for anyone to contribute in order to make PocketMine School. If you\'re interested, consider <a target="_blank" href="https://github.com/PocketMine-School/Pocketmine-School">forking the GitHub repository</a>, then <a target="_blank" href="https://github.com/PocketMine-School/Pocketmine-School/pulls">submit a pull request</a> and wait for a staff to review and merge your pull request.',
      backgroundColor: '#f3f3f3',
      textColor: '#222',
      isCloseable: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Pocketmine School',
        src: 'img/pocketmineschool.png',
        srcDark: 'img/pocketmineschool-wbg.png',
      },
      items: [
        {to: 'tutorials/', label: 'Tutorials', position: 'right'},
        {href: 'https://github.com/PocketMine-School/Pocketmine-School', label: 'Source Code', position: 'right'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: false,
        },
      ],
    },
    footer: {
      //style: 'dark',
      links: [
        {
          title: 'Tutorials',
          items: [
            {
              label: 'How to Make a Plugin',
              to: 'tutorials/htmap/introduction',
            },
            {
              label: 'How to Use FormAPI (PM3)',
              to: 'tutorials/pm3/htufa/introduction',
            },
            {
              label: 'How to Use InvMenu (PM3)',
              to: 'tutorials/pm3/htuim/introduction',
            },
          ],
        },
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
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/tutorials',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/PocketMine-School/Pocketmine-School/tree/master',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          sidebarCollapsible: false,
          lastVersion: "current",
          versions: {
            current: {
              label: "PM4",
              path: ""
            },
            PM3: {
              label: "PM3",
              path: "PM3",
              banner: "unreleased"
            }
          },
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
