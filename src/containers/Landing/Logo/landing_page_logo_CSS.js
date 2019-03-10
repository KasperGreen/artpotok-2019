import { css } from '@emotion/core'
import logo_image from './logo.png'
import landing_page_logo_in_animation from 'containers/Landing/Logo/landing_page_logo_in_animation'
export default css`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: no-repeat center center url(${logo_image});
    background-size: contain;
   // transform: translateY(-150vw);
    animation: ${landing_page_logo_in_animation} 1.08s 1.42s ease-out forwards;
    transform: translate3d(-5vw, 100vh, -120vw);;
`