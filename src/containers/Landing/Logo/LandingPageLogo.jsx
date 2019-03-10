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
      state: {
        is_loaded
      },
      props: {
        is_landscape, ratio,
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
              height
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
        ratio
      }
    } = this
    if (is_landscape) {
      if (ratio > 1.6) {
        return landing_page_logo_wrapper_wide_landscape_CSS
      } else {
        return landing_page_logo_wrapper_square_landscape_CSS
      }
    } else {
      return landing_page_logo_wrapper_portrait_CSS
    }
  }

  get height () {
    const {
      props: {
        is_landscape,
        ratio
      },
      state: {
        width, height,
      }
    } = this
    if (is_landscape) {
      return '90vh'
    } else {
      return `calc(${this.width} * ${height / width})`
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
      return `calc(${this.height} * ${width / height})`
    } else {
      return '120vw'
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