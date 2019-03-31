import React from 'react'
import { Link, graphql } from 'gatsby'
import moment from 'moment'
import Styled from 'styled-components'

import Layout from '../layout'
import Colors from '../colors'

const Title = Styled.h2`
  margin-bottom: 0;
`

const Date = Styled.small`
  color: ${Colors.menu}
`

const BlogPostContaineer = Styled.article`
  border-bottom: 1px solid #eee;
`

const Blog = ({ data }) => {
  const posts = data.wp.posts.edges

  return (
    <Layout siteTitle="The <strong>journey</strong> and the code.">
    {posts.map(({ node }) => {
      const title = node.title
      const date = moment(node.date).format('MMMM Do, YYYY')
      const slug = node.slug
      const excerpt = node.excerpt

      return (
        <BlogPostContaineer key={slug}>
          <Title><Link activeClassName="active" to={`/blog/${slug}`} >{title}</Link></Title>
          <Date>Posted {date}</Date>
          <div
            dangerouslySetInnerHTML={{
              __html: excerpt
            }}
          />
        </BlogPostContaineer>
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