import React from 'react'
import { graphql } from 'gatsby'
import Styled from 'styled-components'
import moment from 'moment'

import Layout from '../layout'
import Colors from '../colors'
import SEO from '../components/SEO'

const Title = Styled.h2`
  margin-bottom: 0;
`

const Date = Styled.small`
  color: ${Colors.menu}
`

const Content = Styled.div`
  margin-top: 1rem;
`

const BlogPost = function Template({ data }) {
  const { postBy: post } = data.wp
  const date = moment(post.date).format('MMMM Do, YYYY')

  return (
    <Layout siteTitle="The <strong>journey</strong> and the code." >
      <SEO
        title={post.title}
        description={post.excerpt}
        slug={`/blog/${post.slug}`}
      />
      <main>
        <article>
          <header>
            <Title>{post.title}</Title>
            <Date>Posted {date}</Date>
          </header>
          <Content className="blog-post" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
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
        excerpt
      }
    }
  }
`
