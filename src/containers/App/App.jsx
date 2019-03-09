import React, { Component } from 'react'
import logo from 'containers/App/logo.svg'
import 'containers/App/App.css'
import { hot } from 'react-hot-loader/root'
import { Global } from '@emotion/core'
import root_CSS from 'styles/root_CSS'
import { ThemeProvider } from 'emotion-theming'
import theme from 'styles/theme'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Route
            render={(route_props) => {
              console.log('%c →→→→ ', 'color: green', route_props, '← route_props | ')
              return null
            }}
          />
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

              <Link to={'/11'}>11</Link>
              <Link to={'/222'}>222</Link>
            </header>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

export default hot(App)
