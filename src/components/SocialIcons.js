import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import Styled from 'styled-components'
import Colors from '../colors'

const ListSocial = Styled.ul`
  background: 'red';
  list-style: none;
  margin: 1.5em 0 0;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 5px;
    font-size: 1.5rem;

    a {
      color: ${Colors.menu};

      &:hover {
        color: ${Colors.text};
        border: 0;
      }
    }

    @media (min-width: 980px) {
      font-size: 2rem;
    }
  }
`

const SocialIcons = () => {
  return (
    <ListSocial>
      <li>
        <a href="https://twitter.com/shahin8r">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://instagram.com/shahin8r">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/shahin8r">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://github.com/shahin8r">
          <FaGithub />
        </a>
      </li>
    </ListSocial>
  )
}

export default SocialIcons