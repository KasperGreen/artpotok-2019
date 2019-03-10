import React, { Component } from 'react'
import plate_image from './plate.png'
import landing_page_plate_CSS from 'containers/Landing/Plate/landing_page_plate_CSS'

export default class LandingPagePlate extends Component {

  state = {
    plate_is_loaded: false,
    width: 0,
    height: 0
  }

  render () {
    const {
      width,
      height,
      state: {
        plate_is_loaded
      }
    } = this

    if (!plate_is_loaded) return false

    return (
      <div {...{...this.props}}>
        <div
          css={[
            landing_page_plate_CSS,
            {
              width,
              height
            }
          ]}
        ></div>
      </div>
    )
  }

  image = new Image()

  get height () {
    const {
      state: {
        width, height
      }
    } = this

    return (height / width * 25) + 'vw'
  }

  get width () {
    return '25vw'
  }

  _loadPlate () {

    this.image.onload = (e) => {
      const img = e.path[0],
        {width, height} = img
      this.setState(
        (state) => {
          return {
            ...state,
            plate_is_loaded: true,
            width,
            height
          }
        }
      )
    }
    this.image.src = plate_image
    return this
  }

  componentDidMount () {
    this._loadPlate()
  }

  componentWillUnmount () {
    this.image.onload = () => {}
  }

}