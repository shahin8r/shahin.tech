import React from 'react'
import { Link } from 'gatsby'

import Availibility from '../utils/availibility'

import Layout from '../layout'
import SEO from '../components/SEO'

export default ({ data }) => {
  const latestBlogPost = data.wp.posts.edges[0].node

  return (
    <Layout siteTitle="Certified <strong>WordPress</strong> expert.">
      <SEO />
      <h2>Hey there, I'm Shahin - a full-stack developer from Sweden with a special love for WordPress and JavaScript.</h2>

      <p>But most people prononuce my name like Shawn so feel free to call me that if you'd like.</p>

      <p>I do digital business solutions, that's my thing. Whether it's modifications to existing products or brand new websites or mobile apps.</p>

      <p>I'm also a certified expert and proud member of <a href="https://codeable.io/?ref=PjTx1">Codeable</a> - which is the home of the top 2% WordPress talents. With a <a href="https://codeable.io/developers/shahin-a/?ref=PjTx1">straight 5-star rating</a> I'm making my clients happy every day.</p>

      <p>Don't miss out on my latest blog post, <Link to={`/blog/${latestBlogPost.slug}`}>{latestBlogPost.title}</Link> or checking out what I'm up to on my social media accounts.</p>

      <p>If you’re looking to work with me, I'm available as of {Availibility()}.</p>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    wp {
      posts {
        edges {
          node {
            slug,
            title
          }
        }
      }
    }
  }
`