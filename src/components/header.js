// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { themes } from '../utils/colors'

const theme = themes.teal

const MyHeader = styled.header`
  background-color: ${theme.primary.main};
  color: black;
  position: fixed;
  top: 0px;
  width: 100%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
`
const Title = styled.h1`
  color: rgba(0, 0, 0, 0.66);
  text-decoration: none;
  font-size: 1.4em;
  padding: 0.8em;
`

const Header = ({ siteTitle }) => (
  <MyHeader>
    <div>
      <Title>{siteTitle}</Title>
    </div>
  </MyHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
