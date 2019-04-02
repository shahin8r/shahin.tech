require("dotenv").config({
  path: '.env'
})

module.exports = {
  siteMetadata: {
    title: 'shahin.tech',
    author: 'Shahin A',
    description: 'A freelance developer from Sweden with a special love for WordPress and JavaScript.',
    siteUrl: 'https://shahin.tech',
    social: {
      twitter: '@shahin8r',
      instagram: '@shahin8r'
    }
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
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