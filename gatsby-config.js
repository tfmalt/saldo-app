module.exports = {
  siteMetadata: {
    title: `Saldo`,
    description: `A simple progressive web app to see the balance of banking accounts`,
    author: `thomas@malt.no`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['material icons', 'sigmar one', 'roboto:300,400,500,700'],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sd60-banking-balance`,
        short_name: `saldo`,
        start_url: `/`,
        background_color: `#D8CBC7`,
        theme_color: `#6193BF`,
        display: `standalone`,
        icon: `src/images/saldo-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
