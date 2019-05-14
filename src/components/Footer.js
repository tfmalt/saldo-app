import React from 'react'
import { version } from '../../package'
import css from './Footer.module.scss'

const Footer = () => (
  <footer className={css.footer}>
    <div>
      Version <span className={css.version}>{version}</span> - Thomas Malt ©{' '}
      {new Date().getFullYear()}
    </div>
    <div className={css.builtWith}>
      Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
