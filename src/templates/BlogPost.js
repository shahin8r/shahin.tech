import React from 'react'
import { graphql } from 'gatsby'
import Styled from 'styled-components'

import Layout from '../layout'

const BlogPostContainer = Styled.article`
  code {
    white-space: pre-wrap;
  }
`

const BlogPost = function Template({ data }) {
  const { postBy: post } = data.wp

  return (
    <Layout siteTitle="The <strong>journey</strong> and the code." >
      <BlogPostContainer className="blog-post">
        <h2>{post.title}</h2>
        <small>{post.date}</small>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
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
