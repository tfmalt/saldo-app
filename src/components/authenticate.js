import React from 'react'
import styled from 'styled-components'
import { themes } from '../utils/colors'
import { urls } from '../utils/settings'
import { navigate } from 'gatsby'

const theme = themes.teal

const Heading = styled.h1`
  font-size: 18px;
  color: ${theme.primary.main};
`
const Wrapper = styled.div`
  min-height: 66vh;
`
const Button = styled.button`
  background-color: ${theme.primary.main};
  color: white;
  width: 100%;
  text-align: center;
  border: none;
  padding: 0.8em;
  margin-top: 1.6em;
  border-radius: 4px;
`

const TextField = styled.div`
  border-bottom: 1px solid ${theme.primary.main};
  margin-bottom: 0.6em;

  &:focus {
    border-bottom: 3px solid ${theme.primary.main};
  }

  label {
    padding-left: 0px;
    padding-top: 2px;
    display: inline-block;
    font-family: sans-serif;
    font-size: 0.9em;
    color: ${theme.primary.main};
  }
  input {
    border: none;
    background-color: ${theme.primary.main};
    border-radius: 4px 4px 0 0;
  }

  input:focus {
    border: 0;
    border-color: white;
  }

  input[type='text'] {
    border: none;
    padding: 0.8em 0.6em;
    font-size: 1em;
    width: 100%;
  }
`

const Form = styled.form``

class Authenticate extends React.Component {
  constructor(props) {
    super(props)

    const auth =
      typeof window === 'undefined'
        ? { userId: '', seret: '' }
        : JSON.parse(localStorage.getItem('sd60:authenticate'))

    this.state = {
      userId: auth.userId || '',
      secret: auth.secret || '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    console.log(`Got a submit! ${this.state.userId}`)
    event.preventDefault()

    fetch(urls.token, {
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
      .then(res => {
        console.log('Got res:', res.status, res.statusText)
        if (res.ok) return res.json()

        return res.json().then(json => {
          console.log('json', json)
          throw new Error(`Got an invalid response. ${res.statusText}`)
        })
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
      })
      .catch(err => console.warn(err))
  }

  handleChange(event) {
    let newState = {}
    newState[event.target.id] = event.target.value
    this.setState(newState)
  }

  render() {
    return (
      <Wrapper>
        <Heading>Authenticate</Heading>
        <Form onSubmit={this.handleSubmit}>
          <TextField>
            <label>Bruker Id</label>
            <input
              type="text"
              value={this.state.userId}
              onChange={this.handleChange}
              id="userId"
            />
          </TextField>
          <TextField>
            <label>Passord</label>
            <input
              type="text"
              value={this.state.secret}
              onChange={this.handleChange}
              id="secret"
            />
          </TextField>
          <Button type="submit" id="authenticate">
            Logg inn
          </Button>
        </Form>
      </Wrapper>
    )
  }
}
export default Authenticate
