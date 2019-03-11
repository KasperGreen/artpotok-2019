import React, { Component } from 'react'
import bubbles_image from './bubbles.png'
import landing_page_bubbles_wrapper_CSS from 'containers/Landing/Bubbles/landing_page_bubbles_wrapper_CSS'
import landing_page_bubbles_CSS from 'containers/Landing/Bubbles/landing_page_bubbles_CSS'

export default class LandingPageBubbles extends Component {
  state = {
    is_loaded: false,
    width: 0,
    height: 0
  }

  render () {
    const {
      custom_styles,
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
            landing_page_bubbles_wrapper_CSS,
            custom_styles
          ]}
        >
          <div css={landing_page_bubbles_CSS} />
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
      },
      state: {
        width,
        height
      }
    } = this
    if (is_landscape) {
      if (is_square) {
        return {
          transform: 'translate(-5%, -100%)',
          top: window.innerHeight,
          left: window.innerWidth - window.innerWidth * .8,
          width: window.innerWidth * .8,
          height: (window.innerWidth * .8) * height / width
        }
      } else {
        return {
          transform: 'translate(-50%, -100%)',
          top: window.innerHeight,
          left: window.innerWidth * 0.5,
          width: window.innerWidth * .64,
          height: (window.innerWidth * .64) * height / width
        }

      }
    } else {
      if (is_square) {
        return {
          transform: 'translate(0, -100%)',
          top: window.innerHeight,
          left: window.innerWidth - window.innerWidth * .8,
          width: window.innerWidth * .8,
          height: (window.innerWidth * .8) * height / width
        }
      } else {
        return {
          display: 'none'
        }

      }
    }
  }

  _loadImage () {
    const {
      props: {
        _reInitParallax
      }
    } = this

    this.image.onload = () => {
      const img = this.image,
        {width, height} = img
      this.setState(
        (state) => {
          return {
            ...state,
            is_loaded: true,
            width,
            height
          }
        }, () => {
          _reInitParallax()
        }
      )
    }

    this.image.src = bubbles_image

    return this
  }

  componentDidMount () {
    this._loadImage()
  }

  componentWillUnmount () {
    this.image.onload = () => {}
  }
}