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

const Content = Styled.div`
  margin-top: 1rem;
`

const Post = Styled.article`
  border-bottom: 1px solid #eee;
`

const Blog = ({ data }) => {
  const posts = data.wp.posts.edges

  return (
    <Layout siteTitle="The <strong>journey</strong> and the code.">
      <main>
        {posts.map(({ node }) => {
          const title = node.title
          const date = moment(node.date).format('MMMM Do, YYYY')
          const slug = node.slug
          const excerpt = node.excerpt

          return (
            <Post key={slug}>
              <header>
                <Title><Link activeClassName="active" to={`/blog/${slug}`} >{title}</Link></Title>
                <Date>Posted {date}</Date>
              </header>
              <Content dangerouslySetInnerHTML={{ __html: excerpt }} />
            </Post>
          )
        })}
      </main>

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