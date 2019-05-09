import React from 'react'
import styled from 'styled-components'
import css from './Icon.module.css'

const IconButton = styled.button`
  display: inline-block;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border: none;
  transition: 0.2s ease all;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transition: 1s ease all;
    outline: none;
  }

  &:focus {
    background-color: rgba(255, 255, 255, 0.4);
    transition: 0.2s ease all;
    outline: none;
  }

  & i {
    font-family: 'Material Icons';
    display: inline-block;
    color: black;
    font-size: 28px;
    font-weight: normal;
    font-style: normal;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
  }
`

class Icon extends React.Component {
  constructor(props) {
    super(props)

    this.props.className = 'test'
  }

  openMenu(event) {
    alert('menu open')
  }
  render() {
    const { name, className } = this.props
    return (
      <IconButton className={className} onClick={this.openMenu}>
        <i>{name}</i>
      </IconButton>
    )
  }
}

export default Icon
