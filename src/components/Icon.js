import React from 'react'
import css from './Icon.module.scss'

const Icon = ({ name, trigger }) => {
  console.log('icon:', name, trigger)
  return (
    <button className={css.iconButton} onClick={trigger}>
      <i>{name}</i>
    </button>
  )
}

export default Icon
