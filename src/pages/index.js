import React from 'react'
import { Link } from 'gatsby'

import Availibility from '../utils/availibility'

import Layout from '../layout'

export default ({ data }) => {
  const latestBlogPost = data.wp.posts.edges[0].node
  
  return (
    <Layout siteTitle="Creative <strong>WordPress</strong> expert.">
        <h2>Hey there, I’m Shahin - a freelance developer from Sweden with a special love for WordPress and JavaScript.</h2>
        
        <p>But most people prononuce my name like Shawn so feel free to call me that if you'd like.</p>
        
        <p>I do digital business solutions, that’s my thing. Wether it’s modifications to existing products or brand new websites or mobile apps.</p>
        
        <p>Don’t miss out on my latest blog post, <Link to={`/blog/${latestBlogPost.slug}`} rel="bookmark">{latestBlogPost.title}</Link> or checking out what I’m up to on my social media accounts.</p>
        
        <p>If you’re looking to work with me, I’m available as of {Availibility()}.</p>
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