import { css } from '@emotion/core'
import plate_image from './plate.png'
import landing_page_plate_in_animation from 'containers/Landing/Plate/landing_page_plate_in_animation'

export default css`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: no-repeat center center url(${plate_image});
    background-size: contain;
    animation: ${landing_page_plate_in_animation} 1.08s cubic-bezier(0, .32, 0.32, 1.22);
`