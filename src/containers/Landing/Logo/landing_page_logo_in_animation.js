import { keyframes } from '@emotion/core'

export default keyframes`
    from {
      transform: translate3d(-5vw, 100vh, -120vw);
      opacity: .8;
    }
    50% {
      transform: translate3d(2vw, 0, -100vw);
      opacity: .95;
    }
    to {
      transform: rotateZ(360deg) translate3d(.42%,0%,0) rotateZ(-360deg);
      opacity: 1;
    }
`