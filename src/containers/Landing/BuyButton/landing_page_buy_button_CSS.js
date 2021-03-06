import { css } from '@emotion/core'
import landing_page_buy_button_in_animation from 'containers/Landing/BuyButton/landing_page_buy_button_in_animation'
import buy_button_text_image from './buy_button_text.png'

export default css`
display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: #2b1944 !important;
    border: none;
    box-shadow: none;
    transition: all .12s ease-in;
    cursor: pointer;
    opacity: 1 !important;
    animation: ${landing_page_buy_button_in_animation} 1.42s cubic-bezier(.11, .22, 0.64, 1.42);
    &:hover {
        box-shadow: 0 0 1px #201434;
        outline: none;
        transform: scale(1.02);
    }
    &:focus {
        box-shadow: 0 0 1px #201434;
        transform: scale(1.02);
        filter: hue-rotate(5deg);
        outline: none !important;

    }
    &:active {
      box-shadow: 2px -1px 3px #201434;
      transform: scale(1.08);
    }
    &:after {
      opacity: .9;
      filter: drop-shadow(1px -1px 2px #2f0010);
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 64%;
      background: center center no-repeat url(${buy_button_text_image});
      background-size: contain;
    }
`