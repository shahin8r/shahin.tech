import React from 'react'
import { graphql } from 'gatsby'
import Styled from 'styled-components'

import Layout from '../layout'
import Project from '../components/Project'

const ProjectsWrapper = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Work = ({ data }) => {
  const projects = data.wp.projects.edges

  return (
    <Layout siteTitle="Quality is <strong>passion</strong> and pride.">
      <h3>Here are some of the things I'm working on.</h3>
      <ProjectsWrapper>
        {projects.map(({ node }) => {
          const slug = node.slug
          const title = node.title
          const content = node.content
          const image = node.featuredImage && node.featuredImage.sourceUrl

          return (
            <Project
              slug={slug}
              title={title}
              content={content}
              image={image}
            />
          )
        })}
      </ProjectsWrapper>
    </Layout>
  )
}

export default Work

export const pageQuery = graphql`
  query {
    wp {
      projects {
        edges {
          node {
            slug
            title
            featuredImage {
              sourceUrl
            }
            content
          }
        }
      }
    }
  }
`