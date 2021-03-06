import React, { Component, createRef } from 'react'
import landing_background_CSS from 'containers/Landing/_css/landing_background_CSS'
import landing_background_wrapper from 'containers/Landing/_css/landing_background_wrapper'

export default class LandingPageBackground extends Component {
  state = {
    animation_in_end: false
  }

  render () {
    const {
      props: {
        background_image,
        ...other_props
      },
      state: {
        animation_in_end
      }
    } = this
    return (
      <div css={landing_background_wrapper} {...{...other_props}}>
        <div
          ref={this.element}
          css={[
            landing_background_CSS,
            {
              backgroundImage: `url(${background_image})`
            },
            animation_in_end && {
              width: '104%',
              height: '104%'
            }
          ]}
        />
      </div>
    )
  }

  element = createRef()

  componentDidMount () {
    this.element.current.addEventListener('animationend', () => {
      this.setState(
        (state) => {
          return {
            ...state,
            animation_in_end: true
          }
        }
      )
    }, {once: true})
  }
}