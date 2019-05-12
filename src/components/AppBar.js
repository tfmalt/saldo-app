import React from 'react'
import Icon from './Icon'
import css from './AppBar.module.scss'

const AppBar = ({ headerTitle, trigger }) => {
  return (
    <>
      <div id="app-bar" className={css.appBar}>
        <Icon name="menu" trigger={trigger} />
        <h6 id="title" className={css.headerTitle}>
          {headerTitle}
        </h6>
      </div>
    </>
  )
}

export default AppBar
