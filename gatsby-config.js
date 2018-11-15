module.exports = {
  siteMetadata: {
    title: 'vibrains',
    siteUrl: `https://vibrains.com`,
  },
  plugins: [
  `gatsby-plugin-sass`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
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
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
        `Quicksand:300,400,500,700`,
        `Raleway:400,300,300italic,400italic,500,500italic,600,600italic,700,700italic`
        ]
      }
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@usemuzli`,
        limit: 6,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    ],
  }
