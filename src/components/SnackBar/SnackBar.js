import React from 'react'
import gcd from '../../EventDispatch'
import css from './SnackBar.module.scss'

class SnackBar extends React.Component {
  constructor(props) {
    super(props)

    const position = this.getPositionObject(this.props.position)

    const initClasses = [
      css.snackbar,
      css[`${position.vertical}${position.horizontal}hide`],
    ]
    this.state = {
      classes: initClasses.join(' '),
      title: 'Snackbar title',
      message: 'Dummy snackbar message text.',
      position,
    }

    this.handleEvent = this.handleEvent.bind(this)

    gcd.addEventListener('authenticationFailed', this.handleEvent)
  }

  getPositionObject(pos = 'bottom left') {
    const words = pos.split(/[- ]/)

    let position = {
      vertical: words.filter(w => w.match(/(top|bottom)/)).shift(),
      horizontal: words.filter(w => w.match(/(left|center|right)/)).shift(),
    }
    console.log('snackbar position object:', position)

    if (
      typeof position.vertical !== 'string' ||
      typeof position.horizontal !== 'string'
    ) {
      throw new TypeError('"position" prop to SnackBar not valid.')
    }

    return position
  }

  handleEvent(event) {
    const timeout = this.props.timeout || 5000
    const { position } = this.state
    const { title, message } = event.detail

    const showClasses = [
      css.snackbar,
      css[`${position.vertical}${position.horizontal}show`],
    ]

    const hideClasses = [
      css.snackbar,
      css[`${position.vertical}${position.horizontal}hide`],
    ]

    this.setState({
      title,
      message,
      classes: showClasses.join(' '),
    })

    setTimeout(
      function() {
        console.log('doing snackbar timeout.')
        this.setState({ classes: hideClasses.join(' ') })
      }.bind(this),
      timeout
    )
  }

  render() {
    const { classes, title, message } = this.state
    return (
      <div className={classes}>
        <h6>{title}</h6>
        <p>{message}</p>
      </div>
    )
  }
}

export default SnackBar
