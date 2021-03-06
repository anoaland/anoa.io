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
    // if it is not '/', like: '/test-site/img/anoa.svg'.
    image: '/img/anoa.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true
  }
]

const siteConfig = {
  title: 'Anoa CLI', // Title for your website.
  tagline: 'React Native Typescript Boilerplate & Code Generator',

  // For anoa.io
  url: 'https://anoa.io',
  baseUrl: '/',

  // For github.io:
  // url: 'https://anoaland.github.io',
  // baseUrl: process.env.NODE_ENV === 'production' ? '/anoa.io/' : '/',

  // Used for publishing and more
  projectName: 'anoa.io',
  organizationName: 'anoaland',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'getting-started-installation', label: 'Docs' },
    { page: 'team', label: 'Team' },
    { href: 'https://github.com/anoaland/anoa-cli', label: 'Github' },
    { search: true }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/anoa.svg',
  footerIcon: 'img/anoa.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#598DD8',
    secondaryColor: '#223754'
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

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Budi Adiono`,

  gaTrackingId: 'UA-139941249-1',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  usePrism: ['jsx', 'typescript', 'tsx', 'bash'],

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/anoaland/anoa-cli',

  cname: 'anoa.io'
}

module.exports = siteConfig
