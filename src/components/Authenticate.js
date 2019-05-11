import React from 'react'
import { urls } from '../utils/settings'
import { navigate } from 'gatsby'
import Spinner from './LoadingSpinner'
import css from './Authenticate.module.scss'

class Authenticate extends React.Component {
  constructor(props) {
    super(props)

    const auth =
      typeof window === 'undefined'
        ? { userId: '', secret: '' }
        : JSON.parse(localStorage.getItem('sd60:authenticate'))

    this.state = {
      userId: auth === null ? '' : auth.userId,
      secret: auth === null ? '' : auth.secret,
      isWaiting: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async handleSubmit(event) {
    console.log(`Got a submit! ${this.state.userId}`)
    event.preventDefault()
    this.setState({ isWaiting: true })

    const res = await fetch(urls.token, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: this.state.userId,
        client_secret: this.state.secret,
      }),
    })

    console.log('Got res:', res.status, res.statusText)

    const json = await res.json()

    this.setState({ isWaiting: false })

    if (res.status === 400) {
      // handle bad credentials.
      console.log('Got wrong auth:', json)
      return
    }

    if (res.ok) {
      // lets be a bit paranoid
      if (
        !json.hasOwnProperty('access_token') ||
        !json.hasOwnProperty('expires_in')
      ) {
        console.warn(json)
        throw new Error(
          'Something is not right with the access_token Response.'
        )
      }

      json.date = new Date()
      if (typeof window !== 'undefined') {
        localStorage.setItem('sd60:token', JSON.stringify(json))
        localStorage.setItem(
          'sd60:authenticate',
          JSON.stringify({
            success: true,
            userId: this.state.userId,
            secret: this.state.secret,
          })
        )
      }
      return navigate('/')
    }

    throw new Error(`Got an invalid response. ${res.statusText}`)
  }

  handleChange(event) {
    let newState = {}
    newState[event.target.id] = event.target.value
    this.setState(newState)
  }

  render() {
    const { isWaiting } = this.state
    return (
      <div id="wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="textfield">
            <input
              type="text"
              required
              value={this.state.userId}
              onChange={this.handleChange}
              id="userId"
            />
            <div id="underline" />
            <label>Bruker id</label>
          </div>
          <div className="textfield">
            <input
              type="text"
              required
              value={this.state.secret}
              onChange={this.handleChange}
              id="secret"
            />
            <div id="underline" />
            <label>Passord</label>
          </div>
          <button className={css.authenticate} type="submit" id="authenticate">
            <div className={isWaiting ? css.hidden : css.visible}>Logg inn</div>
            <div className={isWaiting ? css.visible : css.hidden}>
              <Spinner />
            </div>
          </button>
        </form>
      </div>
    )
  }
}
export default Authenticate
