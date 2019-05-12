import PropTypes from 'prop-types'
import React from 'react'
import Icon from './Icon'
import AppBar from './AppBar'
import css from './Header.module.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)

    console.log('header constructor')
    this.state = {
      mainMenu: css.mainMenuClosed,
    }

    this.openMenu = this.openMenu.bind(this)
  }

  openMenu = event => {
    console.log('open menu:', event)
    this.setState({
      mainMenu: css.mainMenuOpen,
    })
  }

  closeMenu = event => {
    console.log('close menu:', event)
    this.setState({
      mainMenu: css.mainMenuClosed,
    })
  }
  handleTouchStart = event => {
    console.log('touch start:', event)
  }

  render() {
    const { headerTitle } = this.props
    return (
      <>
        <header className={css.appBarHeader}>
          <AppBar headerTitle={headerTitle} trigger={this.openMenu} />
        </header>
        <nav
          id={css.mainMenu}
          onTouchStart={this.handleTouchStart}
          className={this.state.mainMenu}
        >
          <div className={css.topBar}>
            <h6 className={css.topbarTitle}>Hovedmeny</h6>
            <Icon name="close" trigger={this.closeMenu} />
          </div>
          <div className={css.topbarMenuItems}>
            <ul>
              <li>Logg ut</li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
