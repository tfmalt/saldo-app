/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './layout.css'
import css from './Layout.module.scss'

class Layout extends React.Component {
  render() {
    const { headerTitle, children } = this.props
    return (
      <main className={css.mainWrapper}>
        <Header headerTitle={headerTitle} />
        <section>{children}</section>
        <Footer />
      </main>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
