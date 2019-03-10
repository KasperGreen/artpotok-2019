import { css } from '@emotion/core'
import bubbles_image from './bubbles.png'
import landing_page_bubbles_in_animation from 'containers/Landing/Bubbles/landing_page_bubbles_in_animation'

export default css`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: no-repeat center center url(${bubbles_image});
    background-size: contain;
   // transform: translateY(-150vw);
    animation: ${landing_page_bubbles_in_animation} 1.08s 1.42s ease-out forwards;
    transform: translate3d(-5vw, 100vh, -120vw);;
`