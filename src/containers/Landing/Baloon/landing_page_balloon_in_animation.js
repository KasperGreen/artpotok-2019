import { keyframes } from '@emotion/core'

export default keyframes`
    from {
      transform: translate3d(2vw, -42vh, -120vw) scale(.2);
    }
    50% {
      transform: translate3d(-1vw, -5vh, -100vw) scale(.5);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
`