/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
import { version } from '../../package'
import colors from '../utils/colors'
import './layout.css'

const Footer = styled.footer`
  background-color: ${colors.dust_storm};
  padding: 0.2em;
  text-align: center;
  color: #404040;
  font-size: 0.9em;
`

const Main = styled.main`
  padding: 1rem 1rem 1.4rem;
  background-color: white;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <Main>{children}</Main>
          <Footer>
            <div>
              Version {version} by Thomas Malt © {new Date().getFullYear()}
            </div>
            <div>
              Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
          </Footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
