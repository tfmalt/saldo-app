/**
 * Central layout component for all things layout.
 */

import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import SnackBar from '../SnackBar/SnackBar'
import Blip from '../Blip/Blip'
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
        <SnackBar timeout="6000" position="bottom right" />
        <Blip />
      </main>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
