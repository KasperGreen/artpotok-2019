import React, { Component } from 'react'
import landing_page_buy_button_CSS from 'containers/Landing/BuyButton/landing_page_buy_button_CSS'

export default class LandingPageBuyButton extends Component {

  render () {
    const {
      custom_styles,
    } = this

    return (
      <div {...{...this.props}}>
        <div
          css={[
            {
              position: 'absolute',
            },
            custom_styles
          ]}
        >
          <button css={landing_page_buy_button_CSS} />
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
          left: (window.innerHeight * .3 * (420/248)) / 2 + window.innerWidth * 0.05,
          width: window.innerHeight * 0.42,
          height: window.innerHeight * 0.08
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