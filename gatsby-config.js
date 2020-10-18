module.exports = {
  siteMetadata: {
    title: `Sigit Kuncoro`,
    description: `I am Sigit, working as a Front End developer, passionate to write code with Javascript and have professional experience working with Node.js, PHP, HTML, CSS, React, react-redux, JQuery, GraphQL, Unit-testing and also have experience working with relational and spatial databases.`,
    author: `@sgtkuncoro`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sigit-kuncoro`,
        short_name: `sigit`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
