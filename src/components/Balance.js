import React from 'react'
import { navigate } from 'gatsby'
import { urls } from '../utils/settings'
import css from './Balance.module.scss'
import localforage from 'localforage'
import PrettyKr from './PrettyKr'

let timer = null

class Balance extends React.Component {
  constructor(props) {
    super(props)

    localforage.config({ name: 'saldo' })

    this.state = {
      isAuthenticated: false, // auth.success || false,
      userId: '', // auth.userId || '',
      secret: '', // auth.secret || '',
      accounts: [],
      progressBar: {
        class: css.gotTimeout,
      },
    }
    this.fetchAccounts = this.fetchAccounts.bind(this)
  }

  async componentDidMount() {
    console.log('component did mount.')
    const credentials = await localforage.getItem('credentials')
    if (credentials === null || credentials.success === false) {
      this.state.isAuthenticated = false
      return navigate('/authenticate')
    }

    if (credentials.success === true) {
      this.state.isAuthenticated = true
    }

    console.log('Fetching accounts')
    this.fetchAccounts()
  }

  componentWillUnmount() {
    console.log('Balance will unmount.')
    clearTimeout(timer)
  }

  render() {
    const { accounts, progressBar } = this.state
    return (
      <>
        <div className={css.updateProgressIndicator}>
          <div className={progressBar.class} />
        </div>
        <ul className={css.accountList}>
          {accounts.map(item => {
            return (
              <li className={css.item} key={item.accountId}>
                <div className={css.itemWrapper}>
                  <h3 className={css.name}>{item.name}</h3>
                  <div className={css.available}>
                    <PrettyKr
                      currency="kr"
                      amount={item.available}
                      locale="nb"
                    />
                  </div>
                  <div className={css.balanceDiv}>
                    <PrettyKr currency="kr" amount={item.balance} locale="nb" />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  /**
   * helper to fetch the access token for the api backend
   */
  async getAccessToken() {
    const token = await localforage.getItem('access_token')

    // if the token is null here we are logged out.
    if (token === null) return

    const then = new Date(token.date)
    const now = new Date()
    const eol = then.getTime() + (token.expires_in - 300) * 1000
    const ttl = eol - now.getTime()
    if (ttl > 0) {
      console.log(`Access token valid for ${Math.round(ttl / 1000)} seconds.`)
      return token.access_token
    }

    console.log('Access token stale.')

    const credentials = await localforage.getItem('credentials')
    const res = await fetch(urls.token, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: credentials.userId,
        client_secret: credentials.secret,
      }),
    })

    if (res.status === 400) {
      throw new Error(`Invalid credentials ${res.status} ${res.statusText}`)
    }

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
    localforage.setItem('access_token', json)

    return json.access_token
  }

  /**
   * Fetches the accounts from the server.
   */
  async fetchAccounts() {
    const token = await this.getAccessToken()
    if (token === null) return
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

    console.log('Waiting for timeout')
    this.setState({
      accounts: json,
      progressBar: { class: css.waitingForTimeout },
    })

    timer = setTimeout(
      function() {
        console.log('Got timeout')
        this.setState({
          progressBar: { class: css.gotTimeout },
        })
        this.fetchAccounts()
      }.bind(this),
      30000
    )
  }
}

export default Balance
