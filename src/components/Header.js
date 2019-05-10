// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { themes } from '../utils/colors'
import Icon from './Icon'

const theme = themes.teal

// <Title>{headerTitle}</Title>
class Header extends React.Component {
  constructor(props) {
    super(props)

    console.log('header constructor')
    this.state = {
      mainMenu: 'main-menu-closed',
    }

    this.openMenu = this.openMenu.bind(this)
  }

  openMenu = event => {
    console.log('open menu:', event)
  }

  render() {
    const { headerTitle } = this.props
    return (
      <>
        <MyHeader>
          <div>
            <Icon name="menu" trigger={this.openMenu} />
            <Title>{headerTitle}</Title>
          </div>
        </MyHeader>
        <MainMenu className={this.state.mainMenu}>Hello</MainMenu>
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

const MyHeader = styled.header`
  background-color: ${theme.primary.main};
  color: black;
  top: 0px;
  width: 100%;
  height: 72px;
  position: fixed;

  div {
    display: flex;
    flex-direction: row;
    padding: 15px 12px;
  }

  & > * {
    margin-right: 12px;
  }
`

const Title = styled.h1`
  text-decoration: none;
  font-size: 1.2em;
  display: inline-block;
  padding-top: 8px;
  padding-left: 32px;
`

const MainMenu = styled.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  height: 100vh;
  background-color: ${theme.secondary.dark};
`
