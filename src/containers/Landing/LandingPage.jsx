import React, { Component } from 'react'
import landing_wrapper_CSS from 'containers/Landing/_css/landing_wrapper_CSS'
import background_portrait from './_images/background_portrait.png'
import background_portrait_420 from './_images/background_portrait_420.png'
import background_portrait_720 from './_images/background_portrait_720.png'
import background_landscape from './_images/background_landscape.png'
import background_landscape_1400 from './_images/background_landscape_1400.png'
import LandingPageBackground from 'containers/Landing/LandingPageBackground'

export default class LandingPage extends Component {
  state = {
    window_width: window.innerWidth,
    window_height: window.innerHeight,
    background_is_loaded: false
  }

  render () {
    const {
      orientation,
      is_landscape,
      is_portrait,
      ratio,
      pixel_ratio,
      width,
      actual_background,
      state: {
        window_width,
        window_height,
        background_is_loaded
      }
    } = this
    return (
      <div css={landing_wrapper_CSS}>
        {background_is_loaded &&
        <LandingPageBackground {...{background_image: actual_background}} />
        }
        <h1>real width: {width}</h1>
        <h1>width: {window_width}</h1>
        <h1>height: {window_height}</h1>
        <h1>ratio: {ratio}</h1>
        <h1>actual_background: {actual_background}</h1>
        <h1>pixel ratio: {pixel_ratio}</h1>
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

  images = {
    background: {
      portrait: {
        420: background_portrait_420,
        720: background_portrait_720,
        big: background_portrait
      },
      landscape: {
        1400: background_landscape_1400,
        big: background_landscape
      }
    }
  }
  resize_event_timeout_in_milliseconds = 108
  resize_event_timer = 0

  get actual_background () {
    const {
      is_portrait,
      width,
      images: {
        background: {
          portrait,
          landscape
        }
      }
    } = this

    if (is_portrait) {
      if (width <= 420) {
        return portrait[420]
      } else if (width <= 720) {
        return portrait[720]
      } else {
        return portrait.big
      }
    } else {
      if (width <= 1400) {
        return landscape[1400]
      } else {
        return landscape.big
      }
    }
  }

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

  get pixel_ratio () {
    return window.devicePixelRatio
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

  get width () {
    const {
      pixel_ratio,
      state: {
        window_width
      }
    } = this
    return window_width * pixel_ratio
  }

  _addResizeEvent () {
    window.addEventListener('resize', this.resizeEvent)
    return this
  }

  _loadBackground () {

    const {
      actual_background
    } = this

    const image = new Image()
    image.onload = () => {
      console.log('%c →→→→ ', 'color: green', 'loaded! ←  | ')

      this.setState(
        (state) => {
          return {
            ...state,
            background_is_loaded: true
          }
        }
      )
    }
    image.src = actual_background

    return this
  }

  _removeResizeEvent () {
    window.removeEventListener('resize', this.resizeEvent)
    return this
  }

  componentDidMount () {
    this._addResizeEvent()
        ._loadBackground()
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