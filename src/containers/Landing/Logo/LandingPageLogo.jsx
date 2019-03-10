import React, { Component } from 'react'
import logo_image from './logo.png'
import landing_page_logo_CSS from 'containers/Landing/Logo/landing_page_logo_CSS'

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
            {
              position: 'absolute',
              width,
              height,
              left: '50vh',
              top: '10vh'
            }
          ]}
        >
          <div css={landing_page_logo_CSS} />
        </div>
      </div>
    )
  }

  image = new Image()

  get height () {
    const {
      props: {
        is_landscape,
        ratio
      }
    } = this
    if (is_landscape) {
      if (ratio) {

      }
    }
  }

  get height () {
    const {
      state: {
        width, height
      }
    } = this

    return (height / width * 100) + 'vw'
  }

  get width () {
    return '100vw'
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