import PropTypes from 'prop-types'
import React from 'react'
import Icon from './Icon'
import AppBar from './AppBar'
import css from './Header.module.scss'
import localforage from 'localforage'
import { navigate } from 'gatsby'

class Header extends React.Component {
  constructor(props) {
    super(props)

    localforage.config({ name: 'saldo' })

    console.log('header constructor')
    this.state = {
      mainMenu: css.mainMenuClosed,
      userId: 'Ukjent',
    }

    this.openMenu = this.openMenu.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  async componentDidMount() {
    const { userId } = (await localforage.getItem('credentials')) || {
      userId: 'Ukjent',
    }
    console.log('Header did mount: userId:', userId)

    this.setState({ userId })
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
              <li>
                <div>
                  <span>Logget inn som:</span>{' '}
                  <span className={css.userId}>{this.state.userId}</span>
                </div>
                <button
                  onClick={this.handleLogout}
                  className={css.logoutButton}
                >
                  Logg ut
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }

  async handleLogout() {
    console.log('Got logout')

    // we clean the database then.
    await localforage.clear()
    return navigate('/authenticate')
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
