import React from 'react'
import { graphql } from 'gatsby'
import Styled from 'styled-components'
import moment from 'moment'

import Layout from '../layout'
import Colors from '../colors'

const Title = Styled.h2`
  margin-bottom: 0;
`

const Date = Styled.small`
  color: ${Colors.menu}
`

const BlogPostContainer = Styled.article`

`

const BlogPost = function Template({ data }) {
  const { postBy: post } = data.wp
  const date = moment(post.date).format('MMMM Do, YYYY')

  return (
    <Layout siteTitle="The <strong>journey</strong> and the code." >
      <BlogPostContainer className="blog-post">
        <Title>{post.title}</Title>
        <Date>Posted {date}</Date>
        <main dangerouslySetInnerHTML={{ __html: post.content }} />
      </BlogPostContainer>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query GET_POST($slug: String) {
    wp {
      postBy(uri: $slug) {
        title
        slug
        date
        content
      }
    }
  }
`
