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
      trackingId: "UA-44364446-2",
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
      access_token: `312466386.1677ed0.33cd049d40934d6e855c885398203eb9`,
      limit: 10,
    },
  },
  'gatsby-transformer-remark'
  ],
}