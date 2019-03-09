import React, { Component } from 'react'
import plate_image from './plate.png'
import landing_page_plate_CSS from 'containers/Landing/Plate/landing_page_plate_CSS'

export default class LandingPagePlate extends Component {

  state = {
    plate_is_loaded: false
  }

  render () {
    const {
      state: {
        plate_is_loaded
      }
    } = this

    if (!plate_is_loaded) return false

    return (
      <div>
        <div css={landing_page_plate_CSS}></div>
      </div>
    )
  }

  image = new Image()

  _loadPlate () {

    this.image.onload = () => {
      this.setState(
        (state) => {
          return {
            ...state,
            plate_is_loaded: true
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