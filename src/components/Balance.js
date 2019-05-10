import React from 'react'
import { navigate } from 'gatsby'
import { urls } from '../utils/settings'
import styled from 'styled-components'
import { themes } from '../utils/colors'

const theme = themes.teal

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Item = styled.li`
  margin: 1.4em 0;
  padding: 0.5em;
  text-align: center;
  width: 80vw;
  height: 80vw;
  // max-width: 520px;
  // max-height: 520px;
  background-color: ${theme.secondary.light};
  // border: 1px solid ${theme.secondary.dark};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 30px rgb(255,255,255);
`

const Name = styled.h3`
  font-size: 6vw;
  font-weight: normal;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  margin: 12px 0 18px 0;
  padding: 0;
  color: ${theme.secondary.dark}; // rgba(0, 0, 0, 0.4);
`

const Available = styled.div`
  font-size: 14vw;
  height: 100%;
  text-align: center;
  display: inline-block;
  // font-family: 'Fredericka the Great';
  font-family: 'Sigmar One';
  color: ${theme.primary.dark};
  padding: 4vw 0;
  span {
    font-size: 0.6em;
    // color: ${theme.primary.main};
  }
`

const BalanceDiv = styled.div`
  font-size: 6vw;
  margin: 18px 0 12px 0;
  text-align: center;
  color: #404040;
  font-family: 'Sigmar One';
  color: ${theme.secondary.dark};

  span {
    font-size: 0.66em;
    color: ${theme.secondary.dark};
  }
`

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

    // if (auth.success) this.fetchAccounts()
  }

  componentDidMount() {
    if (this.state.isAuthenticated === false) {
      navigate('/authenticate')
    }

    if (this.state.isAuthenticated) this.fetchAccounts()
  }

  render() {
    return (
      <List>
        {this.state.accounts.map(item => (
          <Item key={item.accountId}>
            <div>
              <Name>{item.name}</Name>
              <Available>
                <span>kr </span>
                {item.available.toFixed(2)}
              </Available>
              <BalanceDiv>
                <span>kr </span>
                {item.balance.toFixed(2)}
              </BalanceDiv>
            </div>
          </Item>
        ))}
      </List>
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
