import React from 'react'

const PrettyKr = ({ currency, amount, locale }) => {
  const [main, decimal] = amount.toFixed(2).split('.')
  const number = parseInt(main).toLocaleString(locale)
  return (
    <>
      <span>{currency} </span>
      {number}
      <span>.{decimal}</span>
    </>
  )
}

export default PrettyKr
