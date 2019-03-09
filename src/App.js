import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { hot } from 'react-hot-loader/root'
import { css, Global } from '@emotion/core'
import root_CSS from 'styles/root_CSS'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Global styles={root_CSS} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p css={css`color: red;`}>
            Поток Арт-Кемпинг!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default hot(App)
