import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader/root'
import { Global } from '@emotion/core'
import root_CSS from 'styles/root_CSS'
import { ThemeProvider } from 'emotion-theming'
import theme from 'styles/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from 'containers/Landing/LandingPage'

class App extends Component {
  render () {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Fragment>
            <Global styles={root_CSS} />
            <Switch>
              <Route path={'/'} component={LandingPage} />
            </Switch>
          </Fragment>
        </ThemeProvider>
      </Router>
    )
  }
}

export default hot(App)
