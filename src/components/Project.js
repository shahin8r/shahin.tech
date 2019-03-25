import React from 'react'
import Styled from 'styled-components'

const ProjectWrapper = Styled.article`
  flex: 0 0 48%;
  margin: 1rem 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
`

const ProjectImage = Styled.img`
  max-width: 100%;
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
  font-size: 1rem;

  p {
    margin-top: 0;
  }
`

const Project = ({ title, slug, content, image }) => {
  return (
    <ProjectWrapper key={slug}>
      <ProjectImage src={image} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectContent dangerouslySetInnerHTML={{ __html: content }} />
    </ProjectWrapper>
  )

}

export default Project