import { css } from '@emotion/core'
import trumpet_image from './trumpet.png'
import landing_page_trumpet_in_animation from 'containers/Landing/Trumpet/landing_page_trumpet_in_animation'

export default css`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: no-repeat center center url(${trumpet_image});
    background-size: contain;
    animation: ${landing_page_trumpet_in_animation} 1.08s cubic-bezier(0,.01,.1,1.12);
`