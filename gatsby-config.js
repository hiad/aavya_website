const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';


require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: `Avvya`,
    description: ``,
    author: `@hiad99`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 100,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'rz477be2kwhw',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    }
  ],
}
