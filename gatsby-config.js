module.exports = {
  siteMetadata: {
    title: `Piotreknow`,
    description: `Piotrek's personal website.`,
    author: `@piotreknow02`,
    siteUrl: `https://piotreknow.ml`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-GQH0EX7VV1",
        head: false,
        defer: true,
        enableWebVitalsTracking: true,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/Logo.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
