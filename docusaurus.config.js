module.exports = {
  title: 'PocketMine School',
  tagline: 'Trang Web Hướng Dẫn Mọi Thứ Về PocketMine-MP',
  url: 'https://pocketmineschool.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'PocketMine-MP VN Group', // Usually your GitHub org/user name. Original: PocketMine School
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
    announcementBar: {
      id: 'contribute',
      content: 'Đang trong quá trình phát triển...',
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
        {to: 'tutorials/', label: 'Hướng dẫn', position: 'right'},
        {href: 'https://github.com/PocketMine-MP-VN-Group/Pocketmine-School', label: 'Mã nguồn', position: 'right'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: false,
        },
        {
          type: 'dropdown',
          label: 'Ngôn ngữ',
          items: [
            {
              label: 'Tiếng Việt',
              to: '/'
            },
            {
              label: 'English',
              to: 'https://pocketmineschool.ml',
              target: '_self'
            }
          ]
        }
      ],
    },
    footer: {
      //style: 'dark',
      links: [
        {
          title: 'Hướng dẫn',
          items: [
            {
              label: 'How to Make a Plugin',
              to: 'tutorials/htmap/introduction',
            },
            {
              label: 'How to Use FormAPI',
              to: 'tutorials/htufa/introduction',
            },
            {
              label: 'How to Use InvMenu',
              to: 'tutorials/htuim/introduction',
            },
          ],
        },
        {
          title: 'Cộng đồng',
          items: [
            {
              label: 'PocketMine-MP VN Group Discord',
              href: 'https://discord.gg/UpM96PSrJk'
            },
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
          title: 'Liên kết khác',
          items: [
            {
              label: 'Mã nguồn',
              href: 'https://github.com/PocketMine-MP-VN-School/Pocketmine-School',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <strong><a href="https://github.com/PocketMine-MP-VN-School">PocketMine-MP-VN-School</a></strong>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/tutorials',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/PocketMine-MP-VN-School/Pocketmine-School/tree/master',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          sidebarCollapsible: false,
          lastVersion: "current",
          versions: {
            current: {
                label: "PM3",
                path: ""
            },
            PM4: {
                label: "PM4",
                path: "PM4",
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
