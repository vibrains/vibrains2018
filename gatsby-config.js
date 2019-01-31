const dotenv = require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: 'Vibrains - Web Developer / Designer',
    siteUrl: `https://vibrains.com`,
  },
  plugins: [
  `gatsby-plugin-sass`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography.js`,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: dotenv.parsed.GA_TRACKING_ID,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/pages/notes`,
      name: "markdown-pages",
    },
  },
  `gatsby-transformer-remark`,
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'Vibrains Web Development',
      short_name: 'vibrains',
      start_url: '/',
      background_color: '#663399',
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: 'src/images/gatsby-icon.png',
    },
  },
  {
    resolve: `gatsby-source-medium`,
    options: {
      username: `@usemuzli`,
      limit: 6,
    },
  },
  {
    resolve: `gatsby-source-instagram-all`,
    options: {
      access_token: dotenv.parsed.INSTAGRAM_TOKEN,
      limit: 10,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
      {
        resolve: `gatsby-remark-prismjs`,
        options: {
            // Class prefix for <pre> tags containing syntax highlighting;
            // defaults to 'language-' (eg <pre class="language-js">).
            // If your site loads Prism into the browser at runtime,
            // (eg for use with libraries like react-live),
            // you may use this to prevent Prism from re-processing syntax.
            // This is an uncommon use-case though;
            // If you're unsure, it's best to use the default value.
            classPrefix: "language-",
            // This is used to allow setting a language for inline code
            // (i.e. single backticks) by creating a separator.
            // This separator is a string and will do no white-space
            // stripping.
            // A suggested value for English speakers is the non-ascii
            // character '›'.
            inlineCodeMarker: null,
            // This lets you set up language aliases.  For example,
            // setting this to '{ sh: "bash" }' will let you use
            // the language "sh" which will highlight using the
            // bash highlighter.
            aliases: {},
            // This toggles the display of line numbers globally alongside the code.
            // To use it, add the following line in src/layouts/index.js
            // right after importing the prism color scheme:
            //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
            // Defaults to false.
            // If you wish to only show line numbers on certain code blocks,
            // leave false and use the {numberLines: true} syntax below
            showLineNumbers: false,
            // If setting this to true, the parser won't handle and highlight inline
            // code used in markdown i.e. single backtick code like `this`.
            noInlineHighlight: false,
          },
        },
        ],
      },
    },
    ]
  }