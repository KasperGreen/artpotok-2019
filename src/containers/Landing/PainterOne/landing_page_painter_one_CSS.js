import { css } from '@emotion/core'
import landing_page_painter_one_in_animation from 'containers/Landing/PainterOne/landing_page_painter_one_in_animation'
import painter_image from './painter_one.png'

export default css`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: no-repeat center center url(${painter_image});
    background-size: contain;
    animation: ${landing_page_painter_one_in_animation} 1.08s ease-out;
`