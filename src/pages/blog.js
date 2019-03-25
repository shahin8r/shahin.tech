import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../layout'

const Blog = ({ data }) => {
  const posts = data.wp.posts.edges

  return (
    <Layout siteTitle="The <strong>journey</strong> and the code.">
    {posts.map(({ node }) => {
      const title = node.title
      const date = node.date
      const slug = node.slug
      const excerpt = node.excerpt

      return (
        <article key={slug}>
          <h2><Link activeClassName="active" to={`/blog/${slug}`} >{title}</Link></h2>
          <small>{date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: excerpt
            }}
          />
        </article>
      )
    })}
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    wp {
      posts {
        edges {
          node {
            slug
            title
            date
            excerpt
          }
        }
      }
    }
  }
`