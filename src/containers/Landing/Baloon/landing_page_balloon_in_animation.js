import { keyframes } from '@emotion/core'

export default keyframes`
    from {
      transform: translate3d(-5vw, -30vh, -120vw) scale(.2);
    }
    50% {
      transform: translate3d(2vw, 0, -100vw) scale(.5);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
`