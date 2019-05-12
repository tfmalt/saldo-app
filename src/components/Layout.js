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
import './layout.css'
import css from './Layout.module.scss'

const Version = styled.span`
  font-weight: 700;
`

class Layout extends React.Component {
  render() {
    const { headerTitle, children } = this.props
    return (
      <main class={css.layoutWrapper}>
        <Header headerTitle={headerTitle} />
        <section>{children}</section>
        <footer className={css.layoutFooter}>
          <div>
            Version <Version>{version}</Version> by Thomas Malt ©{' '}
            {new Date().getFullYear()}
          </div>
          <div id="built-with">
            Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </footer>
      </main>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
