require("dotenv").config({
  path: '.env'
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'WP',
        fieldName: 'wp',
        url: process.env.WORDPRESS_GRAPHQL_URL
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
}