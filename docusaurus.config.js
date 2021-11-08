const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "PocketMine VN School",
    tagline: "Trang Web Hướng Dẫn Mọi Thứ Về PocketMine-MP",
    url: "https://pocketmineschool.netlify.app/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "PocketMine-MP VN Group",
    projectName: "Pocketmine-School",

    presets: [
        [
            "@docusaurus/preset-classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/PocketMine-MP-VN-Group/Pocketmine-School/edit/master/docs",
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        "https://github.com/PocketMine-MP-VN-Group/Pocketmine-School/edit/master/blog",
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
                logo: {
                    alt: "PocketMine School VN Logo",
                    src: "img/pocketmineschool.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "right",
                        label: "Hướng Dẫn",
                    },
                    { to: "/blog", label: "Blog", position: "right" },
                    {
                        href: "https://github.com/PocketMine-MP-VN-Group/Pocketmine-School",
                        label: "Mã Nguồn",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Tutorial",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Stack Overflow",
                                href: "https://stackoverflow.com/questions/tagged/docusaurus",
                            },
                            {
                                label: "Discord",
                                href: "https://discordapp.com/invite/docusaurus",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/docusaurus",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blog",
                                to: "/blog",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/facebook/docusaurus",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
