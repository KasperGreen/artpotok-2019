import React, { Component, createRef } from 'react'
import logo_image from './logo.png'
import landing_page_logo_CSS from 'containers/Landing/Logo/landing_page_logo_CSS'
import landing_page_logo_wrapper_CSS from 'containers/Landing/Logo/landing_page_logo_wrapper_CSS'
import landing_wave_animation from 'containers/Landing/Logo/landing_logo_wave_animation'

export default class LandingPageLogo extends Component {
  state = {
    is_loaded: false,
    is_in_animation_end: false,
    width: 0,
    height: 0
  }

  render () {
    const {
      custom_styles,
      state: {
        is_loaded,
        is_in_animation_end
      },
      props: {
        is_landscape,
        is_portrait,
        ratio,
        is_square,
        _reInitParallax,
        ...other_props
      }
    } = this

    if (!is_loaded) return false
    return (
      <div {...{...other_props}}>
        <div>
          <div
            css={[
              landing_page_logo_wrapper_CSS,
              custom_styles
            ]}
          >

            <div
              ref={this.element}
              css={
                [
                  landing_page_logo_CSS,
                  is_in_animation_end && {
                    animation: `${landing_wave_animation} 4.2s linear infinite`
                  }
                ]}
            />
          </div>
        </div>
      </div>
    )
  }

  element = createRef()
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
          width: window.innerHeight * .64 * (width / height),
          height: window.innerHeight * .64
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
          this.element.current.addEventListener(
            'animationend',
            () => {
              this.setState(
                (state) => {
                  return {
                    ...state,
                    is_in_animation_end: true
                  }
                }
              )
            },
            {
              once: true
            })
          _reInitParallax()
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