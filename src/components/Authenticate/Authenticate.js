import React from 'react'
import { urls } from '../../utils/settings'
import { navigate } from 'gatsby'
import Spinner from '../LoadingSpinner'
import localforage from 'localforage'
import dispatch from '../../EventDispatch'
import css from './Authenticate.module.scss'

class Authenticate extends React.Component {
  constructor(props) {
    super(props)

    localforage.config({ name: 'saldo' })

    this.state = {
      userId: '',
      secret: '',
      credentials: {
        userId: '',
        secret: '',
        success: false,
      },
      isWaiting: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    console.log('Authenticate did mount.')
    const credentials = await localforage.getItem('credentials')
    if (credentials !== null && credentials.success === true) {
      console.log('User Authenticated.')
      return navigate('/')
    }

    console.log('User not yet authenticated.')
  }

  render() {
    const { isWaiting } = this.state
    return (
      <div id={css.wrapper}>
        <form onSubmit={this.handleSubmit}>
          <div className={css.textfield}>
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
          <div className={css.textfield}>
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

  async handleSubmit(event) {
    // console.log(`Got a submit! ${this.state.userId}`)
    event.preventDefault()
    this.setState({ isWaiting: true })

    let { credentials } = this.state

    credentials.userId = this.state.userId
    credentials.secret = this.state.secret

    const result = await this.verifyCredentials(credentials)

    this.setState({ isWaiting: false })

    console.log('got result:', result)

    if (result.success === true) {
      return navigate('/')
    }
    // otherwise handle unsuccess here.
  }

  handleChange(event) {
    let newState = {}

    newState[event.target.id] = event.target.value

    this.setState(newState)
  }

  async verifyCredentials(credentials) {
    console.log('Verifying credentials')

    const res = await fetch(urls.token, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: credentials.userId,
        client_secret: credentials.secret,
      }),
    })

    console.log('Got result:', res.status, res.statusText)

    let json = await res.json()

    if (res.status === 400) {
      // handle bad credentials.
      console.log('Got wrong auth:', json)
      json.status = res.status
      credentials.success = false
      json.credentials = credentials
      json.title = 'Feil ved innlogging'
      json.message = 'Bruker-id eller passord er feil. Prøv på nytt.'
      dispatch.dispatchEvent(
        new CustomEvent('authenticationFailed', { detail: json })
      )
      return credentials
    }

    if (!res.ok) {
      throw new Error('Somehthing unexpected went wrong with authentication.')
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
      credentials.success = true

      localforage.setItem('access_token', json)
      localforage.setItem('credentials', credentials)

      return credentials
    }
  }
}
export default Authenticate
