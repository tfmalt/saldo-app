// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { themes } from '../utils/colors'
import Icon from '../components/Icon'

const theme = themes.teal

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
  top: 0px;
  left: -30vw;
  height: 100vh;
  width: 30vw;
  background-color: ${theme.secondary.dark};
  z-index: 100;
`
// <Title>{headerTitle}</Title>
const Header = ({ headerTitle }) => (
  <>
    <MyHeader>
      <div>
        <Icon name="menu" />
        <Title>{headerTitle}</Title>
      </div>
    </MyHeader>
    <MainMenu>Hello</MainMenu>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
