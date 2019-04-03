import React from 'react'
import Styled from 'styled-components'

import ProjectBadge from './ProjectBadge'

const ProjectWrapper = Styled.article`
  display: block;
  margin: 1rem 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
`

const ProjectImage = Styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  border: 1px solid #fafafa;
`

const ProjectTitle = Styled.h3`
  text-align: center;
  margin: 0;
  padding: 0;
`

const ProjectContent = Styled.div`
  padding: 1rem;

  p {
    margin-top: 0;
  }
`

const ProjectMeta = Styled.div`
  padding: 0 1rem;
`

const Project = ({ title, slug, content, image, status, url, github }) => {
  return (
    <ProjectWrapper>
      <ProjectImage src={image} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectContent dangerouslySetInnerHTML={{ __html: content }} />
      <ProjectMeta>
        {status && <ProjectBadge status={status} />}
        {url && <ProjectBadge url={url} />}
        {github && <ProjectBadge github={github} />}
      </ProjectMeta>
    </ProjectWrapper>
  )

}

export default Project