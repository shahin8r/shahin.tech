import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
        social {
          twitter
          instagram
        }
      }
    }
  }
`

const SEO = ({ meta, title, description, slug }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        console.log(data)
        const { siteMetadata } = data.site
        const metaDescription = description || siteMetadata.description
        const url = `${siteMetadata.siteUrl}${slug}`

        return (
          <Helmet
            {...(title
              ? {
                  titleTemplate: `%s - ${siteMetadata.title}`,
                  title
                }
              : {
                  title: `${siteMetadata.title} - ${siteMetadata.description}`
                })}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:url',
                content: url
              },
              {
                property: 'og:title',
                content: title || siteMetadata.title
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:creator',
                content: siteMetadata.social.twitter
              },
              {
                name: 'twitter:title',
                content: title || siteMetadata.title
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ].concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  title: '',
  slug: ''
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default SEO