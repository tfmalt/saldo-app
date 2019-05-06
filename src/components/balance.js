import React from 'react'
import { navigate } from 'gatsby'
import { urls } from '../utils/settings'
import styled from 'styled-components'
import colors from '../utils/colors'

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`
const Item = styled.li`
  margin: 1.4em 0;
  padding: 0.5em;
  text-align: center;
  min-width: 280px;
  border: 1px solid ${colors.dust_storm};
`

const Name = styled.h3`
  font-size: 1.2em;
  font-weight: normal;
  margin: 0 0 0.5em 0;
  padding: 0;
  color: ${colors.silver_lake_blue};
`

const Available = styled.div`
  font-size: 3em;
  text-align: center;

  span {
    font-size: 0.6em;
  }
`

const BalanceDiv = styled.div`
  margin-top: 0.4em;
  text-align: center;
`

class Balance extends React.Component {
  constructor(props) {
    super(props)
    const auth = JSON.parse(localStorage.getItem('sd60:authenticate'))

    this.state = {
      isAuthenticated: auth.success,
      userId: auth.userId,
      secret: auth.secret,
      accounts: [],
    }
    console.log('state:', this.state)
    this.fetcAccounts = this.fetchAccounts.bind(this)

    // if (auth.success) this.fetchAccounts()
  }

  componentDidMount() {
    if (this.state.isAuthenticated) this.fetchAccounts()
  }

  render() {
    if (this.state.isAuthenticated === false) {
      navigate('/authenticate')
    }

    return (
      <div>
        <List>
          {this.state.accounts.map(item => (
            <Item key={item.accountId}>
              <Name>{item.name}</Name>
              <Available>
                <span>kr</span> {item.available.toFixed(2)}
              </Available>
              <BalanceDiv>
                <span>kr</span> {item.balance.toFixed(2)}
              </BalanceDiv>
            </Item>
          ))}
        </List>
      </div>
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
