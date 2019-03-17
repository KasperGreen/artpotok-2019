import React, { Component } from 'react'
import balloon_image from './balloon.png'
import landing_page_balloon_wrapper_CSS from './landing_page_balloon_wrapper_CSS'
import landing_page_balloon_CSS from './landing_page_balloon_CSS'

export default class LandingPageBalloon extends Component {
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
            landing_page_balloon_wrapper_CSS,
            custom_styles
          ]}
        >
          <div css={landing_page_balloon_CSS} />
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
          transform: 'translate(0, 0)',
          top: window.innerHeight * 0.05,
          left: window.innerWidth * 0.9,
          width: (window.innerHeight * .08) * width / height,
          height: window.innerHeight * .08
        }
      } else {
        return {
          transform: 'translate(0, 20%)',
          top: (window.innerHeight * 0.05) + window.innerHeight * 0.08 * 2,
          left: window.innerWidth * .5 + window.innerHeight * 0.36,
          width: (window.innerHeight * .08) * width / height,
          height: window.innerHeight * .08
        }

      }
    } else {
      if (is_square) {
        return {
          transform: 'translate(-42%, 100%)',
          top: window.innerHeight * 0.05,
          left: window.innerWidth * 0.9,
          width: (window.innerHeight * .05) * width / height,
          height: window.innerHeight * .05
        }
      } else {
        return {
          transform: 'translate(-50%, 0)',
          top: window.innerHeight * 0.05,
          left: window.innerWidth * 0.9,
          width: (window.innerHeight * .05) * width / height,
          height: window.innerHeight * .05
        }

      }
    }
  }

  _loadImage () {

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
        }
      )
    }

    this.image.src = balloon_image


    return this
  }

  componentDidMount () {
    this._loadImage()
  }

  componentWillUnmount () {
    this.image.onload = () => {}
  }
}