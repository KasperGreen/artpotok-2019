import React, { Component } from 'react'
import logo_image from './logo.png'
import landing_page_logo_CSS from 'containers/Landing/Logo/landing_page_logo_CSS'
import landing_page_logo_wrapper_CSS from 'containers/Landing/Logo/landing_page_logo_wrapper_CSS'

export default class LandingPageLogo extends Component {
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
            landing_page_logo_wrapper_CSS,
            custom_styles
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
      },
      state: {
        width,
        height
      }
    } = this
    if (is_landscape) {
      if (is_square) {
        return {
          transform: 'translate(-90%, -50%)',
          top: window.innerHeight * 0.5,
          left: window.innerWidth,
          width: (window.innerHeight * .9) * width / height,
          height: window.innerHeight * .9
        }
      } else {
        return {
          transform: 'translate(-50%, -50%)',
          top: window.innerHeight * 0.5,
          left: window.innerWidth * 0.5,
          width: (window.innerHeight * .9) * width / height,
          height: window.innerHeight * .9
        }

      }
    } else {
      if (is_square) {
        return {
          transform: 'translate(-42%, -100%)',
          top: window.innerHeight,
          left: window.innerWidth * 0.5,
          width: window.innerWidth * 1.15,
          height: (window.innerWidth * 1.15) * height / width
        }
      } else {
        return {
          transform: 'translate(-50%, -50%)',
          top: window.innerHeight * 0.55,
          left: window.innerWidth * 0.5,
          width: window.innerWidth * 1.2,
          height: (window.innerWidth * 1.2) * height / width
        }

      }
    }
  }

  _loadImage () {
    this.image.src = logo_image

    this.image.onload = (e) => {
      console.log('%c →→→→ ', 'color: green', e, '← e | ')
      console.log('%c →→→→ ', 'color: green', this.image, '← this.image | ')
      
      const img = e.target || e.path[0],
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

    return this
  }

  componentDidMount () {
    this._loadImage()
  }

  componentWillUnmount () {
    this.image.onload = () => {}
  }
}