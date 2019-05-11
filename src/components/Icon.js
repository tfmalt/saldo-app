import React from 'react'
import './Icon.module.scss'

const Icon = ({ name, trigger }) => {
  console.log('icon:', name, trigger)
  return (
    <button className="icon-button" onClick={trigger}>
      <i>{name}</i>
    </button>
  )
}

export default Icon
