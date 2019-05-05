// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'

const MyHeader = styled.header`
  background-color: ${colors.dust_storm};
  color: black;
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
