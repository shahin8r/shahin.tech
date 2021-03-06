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
  display: block;
  max-width: 980px;
  padding: 0;
  margin: 2rem auto;
  color: ${Colors.text};

  @media (min-width: 980px) {
    display: flex;
    flex-wrap: wrap;
  }
`

const Sidebar = Styled.aside`
  display: block;
  text-align: center;

  @media (min-width: 980px) {
    flex: 1;
    text-align: right;
  }
`

const Main = Styled.main`
  display: block;
  vertical-align: top;
  padding: 1rem;
  max-width: 100%;
  min-width: 0;

  h2 {
    line-height: 2.5rem;
  }

  a {
    color: ${Colors.link};
    padding-bottom: 2px;
    text-decoration: none;

    &:hover {
      border-bottom: 2px solid ${Colors.link};
    }
  }

  @media (min-width: 980px) {
    flex: 5;
    padding: 2rem 1rem 2rem 4rem;

    h2 {
      line-height: 3rem;
    }
  }
`

const Footer = Styled.footer`
  display: block;
  margin-top: 2rem;
  font-size: 0.8rem;
  color: ${Colors.text};
  text-align: center;

  a {
    color: ${Colors.link};
    padding-bottom: 2px;
    text-decoration: none;

    &:hover {
      border-bottom: 2px solid ${Colors.link};
    }
  }

  @media (min-width: 980px) {
    flex: 1 1 100%;
  }
`

export default ({ siteTitle, children }) => (
  <Layout>
    <Sidebar>
      <Link to="/" style={{ border: 0 }}>
        <Avatar src={AvatarImage} alt="Shahin" />
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