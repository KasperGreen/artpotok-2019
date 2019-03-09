import React, { Component } from 'react'
import landing_wrapper_CSS from 'containers/Landing/_css/landing_wrapper_CSS'

export default class LandingPage extends Component {
  state = {
    window_width: window.innerWidth,
    window_height: window.innerHeight
  }

  render () {
    const {
      orientation,
      is_landscape,
      is_portrait,
      ratio,
      state: {
        window_width,
        window_height
      }
    } = this
    return (
      <div css={landing_wrapper_CSS}>
        <h1>width: {window_width}</h1>
        <h1>height: {window_height}</h1>
        <h1>ratio: {ratio}</h1>
        <h1>puixel ratio: {window.devicePixelRatio}</h1>
        {is_landscape &&
        <h1>is_landscape</h1>
        }
        {is_portrait &&
        <h1>is_portrait</h1>
        }
        <h1>orientation: {orientation}</h1>
      </div>
    )
  }

  resize_event_timeout_in_milliseconds = 108
  resize_event_timer = 0

  get is_landscape () {
    return this.orientation === 'landscape'
  }

  get is_portrait () {
    return this.orientation === 'portrait'
  }

  get orientation () {
    const {
      state: {
        window_width,
        window_height
      }
    } = this

    return window_width >= window_height ? 'landscape' : 'portrait'
  }

  get ratio () {
    const {
      state: {
        window_height,
        window_width
      }
    } = this
    return Math.max(window_height, window_width) / Math.min(window_height, window_width)
  }

  _addResizeEvent () {
    window.addEventListener('resize', this.resizeEvent)
    return this
  }

  _loadBackground () {

    return this
  }

  _removeResizeEvent () {
    window.removeEventListener('resize', this.resizeEvent)
    return this
  }

  componentDidMount () {
    this._addResizeEvent()
  }

  componentWillUnmount () {
    this._removeResizeEvent()
  }

  resizeEvent = () => {
    clearTimeout(this.resize_event_timer)
    setTimeout(() => {
      this.setState(
        (state) => {
          return {
            ...state,
            window_width: window.innerWidth,
            window_height: window.innerHeight
          }
        }
      )
    }, this.resize_event_timeout_in_milliseconds)
  }
}