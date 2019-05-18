import React from 'react'
import gcd from '../EventDispatch'
import css from './SnackBar.module.scss'

class SnackBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      classes: `${css.snackbar} ${css.hide}`,
      title: 'Snackbar title',
      message: 'Dummy snackbar message text.',
    }

    this.handleEvent = this.handleEvent.bind(this)

    gcd.addEventListener('authenticationFailed', this.handleEvent)
  }

  handleEvent(event) {
    const timeout = this.props.timeout || 5000

    console.log('snackbar got event:', timeout, event)
    const { title, message } = event.detail

    this.setState({
      title,
      message,
      classes: `${css.snackbar} ${css.show}`,
    })
    setTimeout(
      function() {
        console.log('doing snackbar timeout.')
        this.setState({ classes: `${css.snackbar} ${css.hide}` })
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
