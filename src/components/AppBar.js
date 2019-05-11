import React from 'react'
import Icon from './Icon'
import './AppBar.module.scss'

const AppBar = ({ headerTitle, trigger }) => {
  return (
    <>
      <div id="app-bar">
        <Icon name="menu" trigger={trigger} />
        <h6 id="title">{headerTitle}</h6>
      </div>
    </>
  )
}

export default AppBar
