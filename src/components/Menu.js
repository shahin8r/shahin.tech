import React from 'react'
import Styled from 'styled-components'
import { Link } from 'gatsby'

import Colors from '../colors'
import SocialIcons from './SocialIcons'

const Menu = Styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    text-decoration: none;

    &.active li {
      color: ${Colors.text};
    }
  }
`

const MenuItem = Styled.li`
  line-height: 150%;
  color: ${Colors.menu};
  font-size: 2.5rem;
  font-weight: bold;

  &:hover {
    color: ${Colors.text}
  }
`

const partiallyActive = () => ({ isPartiallyCurrent }) => ({
  className: isPartiallyCurrent ? ` active` : ``
})

export default () => (
  <div>
    <Menu>
      <Link activeClassName="active" to="/"><MenuItem>About</MenuItem></Link>
      <Link activeClassName="active" to="/blog" getProps={partiallyActive('active')}><MenuItem>Blog</MenuItem></Link>
      <Link activeClassName="active" to="/work"><MenuItem>Work</MenuItem></Link>
    </Menu>

    <SocialIcons />
  </div>
)