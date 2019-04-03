import React from 'react'
import Styled from 'styled-components'
import { Link } from 'gatsby'

import Colors from '../colors'
import SocialIcons from './SocialIcons'

const Menu = Styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`

const MenuItem = Styled.li`
  display: inline-block;
  margin: 0 0.5rem;
  line-height: 100%;
  font-size: 1.75rem;
  font-weight: bold;

  a {
    color: ${Colors.menu};
    text-decoration: none;

    &.active {
      color: ${Colors.text}
    }

    &:hover {
      color: ${Colors.text}
    }
  }
`

const partiallyActive = () => ({ isPartiallyCurrent }) => ({
  className: isPartiallyCurrent ? ` active` : ``
})

export default () => (
  <div>
    <Menu>
      <MenuItem>
        <Link activeClassName="active" to="/">
          About
        </Link>
      </MenuItem>
      <MenuItem>
        <Link activeClassName="active" to="/blog" getProps={partiallyActive('active')}>
          Blog
        </Link>
      </MenuItem>
      <MenuItem>
        <Link activeClassName="active" to="/work">
          Work
        </Link>
      </MenuItem>
    </Menu>

    <SocialIcons />
  </div>
)