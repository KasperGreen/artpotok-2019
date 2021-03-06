import React, { Component } from 'react'
import painter_image from './painter_one.png'
import landing_page_painter_one_CSS from './landing_page_painter_one_CSS'

export default class LandingPagePainterOne extends Component {

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
        is_square,
        ratio,
        _reInitParallax,
        ...other_props
      }

    } = this

    if (!is_loaded) return false

    return (
      <div {...{...other_props}}>
        <div
          css={[
            {
              position: 'absolute',
            },
            custom_styles
          ]}
        >
          <div css={landing_page_painter_one_CSS} />
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
          display: 'none',
          transform: 'translate(0, 0)',
          top: window.innerHeight * 0.05,
          left: window.innerWidth * 0.05,
          width: (window.innerHeight * .3) * width / height,
          height: window.innerHeight * .3
        }
      } else {
        return {
          transform: 'translate(-90%, -90%)',
          top: window.innerHeight * 1,
          left: window.innerWidth * 1,
          width: (window.innerHeight * .8) * width / height,
          height: window.innerHeight * .8
        }

      }
    } else {
      if (is_square) {
        return {
          display: 'none',
          transform: 'translate(0, 0)',
          top: window.innerHeight * 0.01,
          left: window.innerWidth * 0.001,
          width: (window.innerHeight * .25) * width / height,
          height: window.innerHeight * .25
        }
      } else {
        return {
          display: 'none',
          transform: 'translate(-50%, 0)',
          top: window.innerHeight * 0.01,
          left: window.innerWidth * 0.5,
          width: window.innerWidth * 0.64,
          height: (window.innerWidth * 0.64) * height / width
        }

      }
    }
  }

  _loadPlate () {
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

    this.image.src = painter_image

    return this
  }

  componentDidMount () {
    this._loadPlate()
  }

  componentWillUnmount () {
    this.image.onload = () => {}
  }

}