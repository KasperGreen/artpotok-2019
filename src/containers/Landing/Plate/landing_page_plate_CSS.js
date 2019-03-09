import { css } from '@emotion/core'
import plate_image from './plate.png'

export default css`
    position: absolute;
    left: 22vh;
    top: 22vh;
    height: 22vh;
    width: 22vh;
    background: no-repeat center center url(${plate_image});
    background-size: contain;
`