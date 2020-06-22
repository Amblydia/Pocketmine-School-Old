/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Pocketmine School',
  tagline: 'A Website That Teaches You About PocketMine Plugin Development',
  organizationName: 'TeamUltraSoft',
  projectName: 'Pocketmine-School',
  url: 'https://teamultrasoft.github.io',
  baseUrl: '/Pocketmine-School/',

  noIndex: false,

  headerLinks: [
    {page: ' ', label: 'Home'},
    {page: 'tutorials', label: 'Tutorials'},
  ],

  users,

  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: '',

  colors: {
    primaryColor: '#151d21',
    secondaryColor: '#33464f',
  },

  copyright: `Copyright © ${new Date().getFullYear()} UltraSoft`,

  highlight: {
    theme: 'tomorrow-night-eighties',
    defaultLang: 'php',
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  onPageNav: 'separate',
  cleanUrl: true,
  twitterImage: 'img/undraw_tweetstorm.svg',
  editUrl: 'https://github.com/TeamUltraSoft/Pocketmine-School/tree/master/docs/',
  docsUrl: '',
  scrollToTop: true,
  docsSideNavCollapsible: true,
  enableUpdateBy: true,
  enableUpdateTime: true,
};

module.exports = siteConfig;
