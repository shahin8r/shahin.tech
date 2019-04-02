import React from 'react'
import Styled from 'styled-components'
import { Link } from 'gatsby'

import Colors from './colors'
import Avatar from './components/Avatar'
import AvatarImage from './images/shahin.jpeg'
import HireBtn from './components/HireBtn'
import Menu from './components/Menu'
import HeaderTitle from './components/HeaderTitle'

const Layout = Styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 980px;
  padding: 0;
  margin: 5rem auto;
  color: ${Colors.text}

  a {
    color: ${Colors.link}
    padding-bottom: 2px;
    text-decoration: none;

    &:hover {
      border-bottom: 2px solid ${Colors.link};
    }
  }
`

const Sidebar = Styled.aside`
  flex: 1;
  text-align: right;
`

const Main = Styled.main`
  flex: 5;
  vertical-align: top;
  padding: 2rem 1rem 2rem 4rem;
  max-width: 100%;
  min-width: 0;

  h2 {
    line-height: 3rem;
  }
`

const Footer = Styled.footer`
  flex: 1 1 100%;
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #ccc;
  text-align: center;

  a {
    color: #aaaaff;

    &:hover {
      border-color: #aaaaff;
    }
  }
`

export default ({ siteTitle, children }) => (
  <Layout>
    <Sidebar>
      <Link to="/" style={{ border: 0 }}>
        <Avatar src={AvatarImage} />
      </Link>
      
      <Link to="/hire">
        <HireBtn>Hire me</HireBtn>
      </Link>

      <Menu />
    </Sidebar>

    <Main>
      <HeaderTitle dangerouslySetInnerHTML={{ __html: siteTitle }} />

      { children }
    </Main>

    <Footer>
      Learn more on <Link to="/built-with">how I built this site</Link>.
    </Footer>
  </Layout>
)