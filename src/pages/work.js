import React from 'react'
import { graphql } from 'gatsby'
import Styled from 'styled-components'

import Layout from '../layout'
import Project from '../components/Project'
import SEO from '../components/SEO'

const ProjectsWrapper = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Work = ({ data }) => {
  const projects = data.wp.projects.edges

  return (
    <Layout siteTitle="Quality is <strong>passion</strong> and pride.">
      <SEO />
      <h2>Here are some of the things I'm working on.</h2>
      <ProjectsWrapper>
        {projects.map(({ node }) => {
          const slug = node.slug
          const title = node.title
          const content = node.content
          const image = node.featuredImage && node.featuredImage.sourceUrl
          const status = node.projectStatus
          const url = node.projectUrl
          const github = node.projectGithub

          return (
            <Project
              key={slug}
              slug={slug}
              title={title}
              content={content}
              image={image}
              status={status}
              url={url}
              github={github}
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
              sourceUrl(size:PROJECT)
            }
            content
            projectStatus
            projectGithub
            projectUrl
          }
        }
      }
    }
  }
`