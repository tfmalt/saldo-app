/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from '../components/Header'
import { version } from '../../package'
import { themes } from '../utils/colors'
import './layout.css'

const theme = themes.teal

const Footer = styled.footer`
  font-family: 'Roboto', sans-serif;
  background-color: ${theme.primary.main};
  padding: 0.5rem;
  text-align: center;
  color: #404040;
  font-size: 0.9em;
  position: fixed;
  width: 100%;
  bottom: 0px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.3);
  div#built-with {
    font-size: 0.8em;
  }
`
const Version = styled.span`
  font-weight: 700;
`

const Main = styled.main`
  padding: 14vh 6vw;
  background-color: ${theme.secondary.main};
  height: 100%;
`

class Layout extends React.Component {
  render() {
    const { headerTitle, children } = this.props
    return (
      <>
        <Header headerTitle={headerTitle} />
        <Main>{children}</Main>
        <Footer>
          <div>
            Version <Version>{version}</Version> by Thomas Malt ©{' '}
            {new Date().getFullYear()}
          </div>
          <div id="built-with">
            Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </Footer>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
