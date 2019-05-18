import React from 'react'
import gcd from '../EventDispatch'
import css from './Blip.module.scss'

class Blip extends React.Component {
  constructor(props) {
    super(props)

    this.state = { classes: css.hide }

    this.handleBalanceOk = this.handleBalanceOk.bind(this)

    gcd.addEventListener('gotBalanceOk', this.handleBalanceOk)
  }

  handleBalanceOk() {
    console.log('Blip: got balance ok')
    this.setState({ classes: css.show })
    setTimeout(
      function() {
        this.setState({ classes: css.hide })
      }.bind(this),
      800
    )
  }

  render() {
    const { classes } = this.state
    return (
      <>
        <div id={css.blipBox} className={classes} />
        <div />
      </>
    )
  }
}

export default Blip
