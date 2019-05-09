import React from 'react'
import styled from 'styled-components'
import { themes } from '../utils/colors'
import { urls } from '../utils/settings'
import { navigate } from 'gatsby'

const theme = themes.teal

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
        <Form onSubmit={this.handleSubmit}>
          <TextField>
            <input
              type="email"
              required
              value={this.state.userId}
              onChange={this.handleChange}
              id="userId"
            />
            <Underline />
            <label>Bruker id</label>
          </TextField>
          <TextField>
            <input
              type="text"
              required
              value={this.state.secret}
              onChange={this.handleChange}
              id="secret"
            />
            <Underline />
            <label>Passord</label>
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

const Wrapper = styled.div`
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Button = styled.button`
  background-color: ${theme.secondary.dark};
  font-family: Roboto;
  font-weight: 500;
  font-size: 1.2em;
  color: black;
  width: 100%;
  text-align: center;
  border: none;
  padding: 0.8em;
  margin-top: 6vh;
  border-radius: 4px;
  height: 72px;
`

const Underline = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 2px;
  background-color: none;
`

const TextField = styled.div`
  margin-bottom: 3vh;
  position: relative;

  label {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.2em;
    color: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: 12px;
    top: 1.3em;
  }
  input:focus {
    outline: none;
  }
  input:focus ~ label,
  input:valid ~ label {
    top: 5px;
    font-size: 0.9em;
    color: ${theme.primary.main};
    font-weight: 500;
    transition: 0.2s ease all;
  }

  input:focus ~ div {
    background-color: ${theme.primary.main};
    transition: 0.2s ease all;
  }

  input {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    height: 72px;
    background-color: ${theme.secondary.light};
    font-family: 'Roboto';
    border-bottom: 1px solid ${theme.primary.main};
    border-radius: 4px 4px 0 0;
    display: block;
    padding: 24px 12px 2px;
    font-size: 1.2em;
    width: 100%;
  }
`

const Form = styled.form`
  margin: 0;
`