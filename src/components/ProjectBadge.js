import React from 'react'
import Styled from 'styled-components'
import { FaBullhorn, FaGlobeAmericas, FaGithub } from 'react-icons/fa'

import Colors from '../colors'

const ProjectBadgeWrapper = Styled.div`
  display: block;
  margin-bottom: 1rem;
`

const ProjectBadgeContent = Styled.span`
  background: ${props => props.link ? Colors.link : '#aaa'};
  line-height: 1rem;
  color: #fff;
  font-size: 12px;
  letter-spacing: 1px;
  border-radius: 5px;
  padding: 0.75rem 0.5rem;
  text-transform: uppercase;

  svg {
    font-size: 1.5rem;
    margin-right: 0.5rem;
    vertical-align: middle;
  }

  a {
    color: #fff;

    &:hover {
      border: 0;
    }
  }
`

const ProjectBadge = ({ status, github, url }) => {
  const link = (github || url) ? true : false

  return (
      <ProjectBadgeWrapper>
        <ProjectBadgeContent link={link}>
          { github && (
            <a href={github}>
              <FaGithub />
              View code
            </a>
          )}

          { status && (
            <span>
              <FaBullhorn />
              {status}
            </span>
          )}

          { url && (
            <a href={url}>
              <FaGlobeAmericas />
              Visit website
            </a>
          )}
        </ProjectBadgeContent>
      </ProjectBadgeWrapper>
  )
}

export default ProjectBadge