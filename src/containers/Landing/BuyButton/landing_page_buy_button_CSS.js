import { css } from '@emotion/core'
import landing_page_buy_button_in_animation from 'containers/Landing/BuyButton/landing_page_buy_button_in_animation'

export default css`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: red;
    animation: ${landing_page_buy_button_in_animation} 1.08s cubic-bezier(0, .32, 0.32, 1.22);
`