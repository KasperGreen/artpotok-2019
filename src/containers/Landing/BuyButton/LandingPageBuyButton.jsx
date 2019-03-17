import React, { Component } from 'react'
import landing_page_buy_button_CSS from 'containers/Landing/BuyButton/landing_page_buy_button_CSS'
import logo_image from 'containers/Landing/Logo/logo.png'

export default class LandingPageBuyButton extends Component {

  state = {
    is_loaded: false,
    width: 0,
    height: 0
  }

  render () {
    const {
      custom_styles,
      props: {
        is_landscape,
        is_portrait,
        is_square,
        ratio,
        ...other_props
      },
      state: {
        is_loaded
      }
    } = this

    if (!is_loaded) return false

    return (
      <div {...{...other_props}} css={{zIndex: 999}}>
        <div
          css={[
            {
              position: 'absolute',
            },
            custom_styles
          ]}
        >
          <button
            data-tc-event="5c792306e822ab000c35a1a9"
            data-tc-token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSJ9.eyJwIjoiNWM3N2U1MDQxYTZmMzAwMDBiMzI5NzFiIn0.Q54vAMt4dOLcbhkPKBzXJwVlr2zBASOIlJ7chmC1GV0"
            css={[
              landing_page_buy_button_CSS,
              {
                borderRadius: `${custom_styles.height / 2}px !important`
              }
            ]}
            onClick={() => {
              if (window.yaCounter49024811) window.yaCounter49024811.reachGoal('buy_ticket_button')
              if (window.ga) window.ga('send', 'click', 'buy_ticket_button')
              if (window.fbq) window.fbq('track', 'Purchase', {
                content_name: 'Клик по кнопке купить билет',
                value: 0.00,
                currency: 'RUB'
              })
              if (window.fbq) window.fbq('trackCustom', 'buy_ticket_button', {})

            }}
          />
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
        }
      } else {
        return {
          transform: 'translate(-110%, 100%)',
          top: window.innerHeight * 0.05,
          left: window.innerWidth,
          width: window.innerHeight * 0.42,
          height: window.innerHeight * 0.08
        }

      }
    } else {
      if (is_square) {
        return {
          transform: 'translate(-50%, 20%)',
          top: (window.innerHeight * 0.01) + window.innerHeight * .25,
          left: window.innerWidth * 0.001 + ((window.innerHeight * .25) * 420 / 248 / 2),
          width: window.innerHeight * 0.42 / 2,
          height: window.innerHeight * 0.08 / 2
        }
      } else {
        return {
          transform: 'translate(-50%, -150%)',
          top: window.innerHeight * 1,
          left: window.innerWidth * 0.5,
          width: window.innerWidth * 0.8,
          height: window.innerWidth * 0.16
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