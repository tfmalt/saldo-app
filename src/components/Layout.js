/**
 * Central layout component for all things layout.
 */

import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SnackBar from '../components/SnackBar'
import Blip from '../components/Blip'
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
        <SnackBar timeout="6000" />
        <Blip />
      </main>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
