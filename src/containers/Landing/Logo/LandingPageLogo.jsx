import React, { Component } from 'react'
import logo_image from './logo.png'
import landing_page_logo_CSS from 'containers/Landing/Logo/landing_page_logo_CSS'
import landing_page_logo_wrapper_CSS from 'containers/Landing/Logo/landing_page_logo_wrapper_CSS'
import landing_page_logo_wrapper_wide_landscape_CSS
  from 'containers/Landing/Logo/landing_page_logo_wrapper_wide_landscape_CSS'
import landing_page_logo_wrapper_square_landscape_CSS
  from 'containers/Landing/Logo/landing_page_logo_wrapper_square_landscape_CSS'
import landing_page_logo_wrapper_portrait_CSS from 'containers/Landing/Logo/landing_page_logo_wrapper_portrait_CSS'

export default class LandingPageLogo extends Component {
  state = {
    is_loaded: false,
    width: 0,
    height: 0
  }

  render () {
    const {
      width,
      height,
      custom_styles,
      top,
      left,
      state: {
        is_loaded
      },
      props: {
        is_landscape,
        is_portrait,
        ratio,
        is_square,
        ...other_props
      }
    } = this

    if (!is_loaded) return false
    return (
      <div {...{...other_props}}>
        <div
          css={[
            landing_page_logo_wrapper_CSS,
            custom_styles,
            {
              width,
              height,
              top,
              left
            }
          ]}
        >
          <div css={landing_page_logo_CSS} />
        </div>
      </div>
    )
  }

  image = new Image()

  get custom_styles () {
    const {
      props: {
        is_landscape,
        is_square,
        ratio
      }
    } = this
    if (is_landscape) {
      if (is_square) {
        return landing_page_logo_wrapper_square_landscape_CSS
      } else {
        return landing_page_logo_wrapper_wide_landscape_CSS
      }
    } else {
      return landing_page_logo_wrapper_portrait_CSS
    }
  }

  get height () {
    const {
      props: {
        is_landscape,
        is_portrait,
        ratio
      },
      state: {
        width, height,
      }
    } = this
    if (is_landscape) {
      return (window.innerHeight * .9)
    } else {
      return this.width * height / width
    }
  }

  get left () {
    const {
      props: {
        is_landscape,
        is_square,
        ratio
      }
    } = this
    if (is_landscape) {
      if (is_square) {
        return window.innerWidth
      } else {
        return window.innerWidth * 0.5
      }
    } else {
      if (is_square) {
        return window.innerWidth * 0.5
      } else {
        return window.innerWidth * 0.5
      }
    }
  }

  get top () {
    const {
      props: {
        is_landscape,
        is_square,
        ratio
      }
    } = this
    if (is_landscape) {
      if (is_square) {
        return window.innerHeight * 0.5
      } else {
        return window.innerHeight * 0.5
      }
    } else {
      if (is_square) {
        return window.innerHeight * 0.5
      } else {
        return window.innerHeight * 0.5
      }
    }
  }

  get width () {
    const {
      state: {
        width, height,
      },
      props: {
        is_landscape
      }
    } = this

    if (is_landscape) {
      return this.height * width / height
    } else {
      return (window.innerWidth * 1.2)
    }
  }

  _loadImage () {

    this.image.onload = (e) => {
      const img = e.path[0],
        {width, height} = img
      this.setState(
        (state) => {
          return {
            ...state,
            is_loaded: true,
            width,
            height
          }
        }
      )
    }
    this.image.src = logo_image

    return this
  }

  componentDidMount () {
    this._loadImage()
  }

  componentWillUnmount () {
    this.image.onload = () => {}
  }
}