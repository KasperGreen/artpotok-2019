import React, { Component, Fragment } from 'react'

export default class LandingPage extends Component {
  state = {
    window_width: window.innerWidth,
    window_height: window.innerHeight
  }
  render () {
    return (
      <Fragment>
          <h1>Ололо!</h1>
      </Fragment>
    )
  }
}