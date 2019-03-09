import React, { Component } from 'react'
import logo from 'containers/App/logo.svg'
import 'containers/App/App.css'
import { hot } from 'react-hot-loader/root'
import { Global } from '@emotion/core'
import root_CSS from 'styles/root_CSS'
import { ThemeProvider } from 'emotion-theming'
import theme from 'styles/theme'

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Global styles={root_CSS} />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Поток Арт-Кемпинг!
            </p>
            <a
              className="App-link"
              href="https://artpotok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ArtPotok
            </a>
          </header>
        </div>
      </ThemeProvider>
    )
  }
}

export default hot(App)
