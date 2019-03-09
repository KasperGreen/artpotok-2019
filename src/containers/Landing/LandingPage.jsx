import React, { Component, Fragment } from 'react'

export default class LandingPage extends Component {
  state = {
    window_width: window.innerWidth,
    window_height: window.innerHeight
  }

  render () {
    const {
      state: {
        window_width,
      }
    } = this
    return (
      <Fragment>
        <h1>{window_width}</h1>
      </Fragment>
    )
  }
}