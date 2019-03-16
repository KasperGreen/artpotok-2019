import { css } from '@emotion/core'
import landing_background_in_animation from 'containers/Landing/_animations/landing_background_in_animation'

export default css`
position: absolute;
transition: all .12s cubic-bezier(0,0,0,.99);
width: 100%;
height: 100%;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
background: center center no-repeat;
background-size: cover;
animation: ${landing_background_in_animation} 1.08s ease;
`