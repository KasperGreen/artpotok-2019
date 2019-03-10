import { css } from '@emotion/core'
import baloon_image from './balloon.png'
import landing_page_balloon_in_animation from 'containers/Landing/Baloon/landing_page_balloon_in_animation'

export default css`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: no-repeat center center url(${baloon_image});
    background-size: contain;
   // transform: translateY(-150vw);
    animation: ${landing_page_balloon_in_animation} 4.20s 1.42s ease-out forwards;
    transform: translate3d(-5vw, 100vh, -120vw);;
`