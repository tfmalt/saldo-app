import React from 'react'
import { navigate } from 'gatsby'
import { urls } from '../utils/settings'
import css from './Balance.module.scss'

class Balance extends React.Component {
  constructor(props) {
    super(props)
    let auth =
      typeof window === 'undefined'
        ? { success: false, userId: '', secret: '' }
        : JSON.parse(localStorage.getItem('sd60:authenticate'))

    if (auth === null) {
      auth = { success: false, userId: '', secret: '' }
    }

    this.state = {
      isAuthenticated: auth.success || false,
      userId: auth.userId || '',
      secret: auth.secret || '',
      accounts: [],
      progressBar: {
        class: css.waitingForUpdate,
      },
    }
    this.fetcAccounts = this.fetchAccounts.bind(this)
  }

  componentDidMount() {
    console.log('component did mount. state:', this.state)
    if (this.state.isAuthenticated === false) {
      navigate('/authenticate')
    }

    if (this.state.isAuthenticated) {
      console.log('FEtching accounts')
      this.fetchAccounts()
    }
  }

  render() {
    const { accounts, progressBar } = this.state
    return (
      <>
        <div className={css.updateProgressIndicator}>
          <div className={progressBar.class} />
        </div>
        <ul className={css.list}>
          {accounts.map(item => (
            <li className={css.item} key={item.accountId}>
              <div className={css.itemWrapper}>
                <h3 className={css.name}>{item.name}</h3>
                <div className={css.available}>
                  <span>kr </span>
                  {item.available.toFixed(2)}
                </div>
                <div className={css.balanceDiv}>
                  <span>kr </span>
                  {item.balance.toFixed(2)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
  }

  /**
   * helper to fetch the access token for the api backend
   */
  async getAccessToken() {
    const token = JSON.parse(localStorage.getItem('sd60:token'))
    const then = new Date(token.date)
    const now = new Date()

    if (then.getTime() + (token.expires_in - 300) * 1000 > now.getTime()) {
      return Promise.resolve(token.access_token)
    }

    const res = await fetch(urls.token, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: this.state.userId,
        client_secret: this.state.secret,
      }),
    })

    if (!res.ok) {
      throw new Error(`Invalid response: ${res.status} ${res.statusText}`)
    }

    const json = await res.json()
    // lets be a bit paranoid
    if (
      !json.hasOwnProperty('access_token') ||
      !json.hasOwnProperty('expires_in')
    ) {
      console.warn(json)
      throw new Error('Something is not right with the access_token Response.')
    }

    json.date = new Date()
    localStorage.setItem('sd60:token', JSON.stringify(json))

    return json.access_token
  }

  /**
   * Fetches the accounts from the server.
   */
  async fetchAccounts() {
    const token = await this.getAccessToken()
    const res = await fetch(urls.balance, {
      method: 'get',
      headers: { Authorization: `Bearer ${token}` },
    })

    console.log('result:', res.status, res.statusText)
    const json = await res.json()
    if (!res.ok) {
      console.warn('error text:', json)
      return
    }

    console.log('Getting ready for timeout')
    this.setState({
      accounts: json,
      progressBar: { class: css.waitingForUpdate },
    })

    setTimeout(
      function() {
        console.log('Got timeout')
        this.setState({
          progressBar: { class: css.gotUpdate },
        })
        this.fetchAccounts()
      }.bind(this),
      30000
    )
  }
}

export default Balance
