import React from 'react'
import { navigate } from 'gatsby'
import { urls } from '../utils/settings'
import styled from 'styled-components'
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
    }
    console.log('state:', this.state)
    this.fetcAccounts = this.fetchAccounts.bind(this)
  }

  componentDidMount() {
    if (this.state.isAuthenticated === false) {
      navigate('/authenticate')
    }

    if (this.state.isAuthenticated) this.fetchAccounts()
  }

  render() {
    return (
      <ul className={css.list}>
        {this.state.accounts.map(item => (
          <li className={css.item} key={item.accountId}>
            <div className={css.itemWrapper}>
              <h3 className={css.name}>{item.name}</h3>
              <div className={css.available}>
                <span>kr </span>
                {item.available.toFixed(2)}
              </div>
              <div class={css.balanceDiv}>
                <span>kr </span>
                {item.balance.toFixed(2)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  getAccessToken() {
    const token = JSON.parse(localStorage.getItem('sd60:token'))
    const then = new Date(token.date)
    const now = new Date()

    if (then.getTime() + (token.expires_in - 300) * 1000 > now.getTime()) {
      return Promise.resolve(token.access_token)
    }

    return fetch(urls.token, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: this.state.userId,
        client_secret: this.state.secret,
      }),
    })
      .then(res => {
        if (res.ok) return res.json()

        throw new Error(`Invalid response: ${res.status} ${res.statusText}`)
      })
      .then(json => {
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
        localStorage.setItem('sd60:token', JSON.stringify(json))

        return json.access_token
      })
      .catch(error => console.error(error.message))
  }

  fetchAccounts() {
    return this.getAccessToken()
      .then(token =>
        fetch(urls.balance, {
          method: 'get',
          headers: { Authorization: `Bearer ${token}` },
        })
      )
      .then(res => {
        console.log('result:', res.status, res.statusText)
        if (res.ok) return res.json()

        return res.json().then(data => {
          console.log('error text:', data)
        })
      })
      .then(json => {
        console.log(json)
        this.setState({ accounts: json })
      })
  }
}

export default Balance
