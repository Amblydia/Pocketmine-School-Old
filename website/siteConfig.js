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
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: '',
  tagline: 'A website for testing',
  url: 'https://github.com/TeamUltraSoft.github.io',
  baseUrl: '/Pocketmine-School/',
  projectName: 'Pocketmine-School',
  organizationName: 'teamultrasoft',

  headerLinks: [
    {page: 'index', label: 'Home'},
    {page: 'tutorials', label: 'Tutorials'},
  ],

  users,

  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#151d21',
    secondaryColor: '#33464f',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  copyright: `Copyright © ${new Date().getFullYear()} UltraSoft`,

  highlight: {
    theme: 'tomorrow-night-eighties',
    defaultLang: 'php',
  },


  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  // docsSideNavCollapsible: true,
  enableUpdateBy: true,
  enableUpdateTime: true,
  editUrl: 'https://github.com/TeamUltraSoft/Pocketmine-School/tree/master/docs/',
  docsUrl: '',
  scrollToTop: true,
};

module.exports = siteConfig;
