import React, { Component } from 'react'
import landing_page_buy_button_CSS from 'containers/Landing/BuyButton/landing_page_buy_button_CSS'

export default class LandingPageBuyButton extends Component {

  render () {
    const {
      custom_styles,
    } = this

    return (
      <div {...{...this.props}} css={{zIndex: 999}}>
        <div
          css={[
            {
              position: 'absolute',
              overflow: 'hidden'
            },
            custom_styles
          ]}
        >
          <button
            data-tc-event="5c792306e822ab000c35a1a9"
            data-tc-token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSJ9.eyJwIjoiNWM3N2U1MDQxYTZmMzAwMDBiMzI5NzFiIn0.Q54vAMt4dOLcbhkPKBzXJwVlr2zBASOIlJ7chmC1GV0"
            css={landing_page_buy_button_CSS} />
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
      }
    } = this
    if (is_landscape) {
      if (is_square) {
        return {
          transform: 'translate(-50%, 20%)',
          top: window.innerHeight * 0.05 + window.innerHeight * .3,
          left: (window.innerHeight * .3 * (420 / 248)) / 2 + window.innerWidth * 0.05,
          width: window.innerHeight * 0.42,
          height: window.innerHeight * 0.08,
          borderRadius: (window.innerHeight * 0.08) / 2
        }
      } else {
        return {
          transform: 'translate(0, 0)',
          top: window.innerHeight * 0.05,
          left: window.innerWidth * 0.05,
          width: window.innerHeight * 0.42,
          height: window.innerHeight * 0.08
        }

      }
    } else {
      if (is_square) {
        return {
          transform: 'translate(0, 0)',
          top: window.innerHeight * 0.01,
          left: window.innerWidth * 0.001,
          width: window.innerHeight * 0.42,
          height: window.innerHeight * 0.08
        }
      } else {
        return {
          transform: 'translate(-50%, 0)',
          top: window.innerHeight * 0.01,
          left: window.innerWidth * 0.5,
          width: window.innerHeight * 0.42,
          height: window.innerHeight * 0.08
        }

      }
    }
  }

}