import { keyframes } from '@emotion/core'

export default keyframes`
    from {
      transform: translate3d(-5vw, 140vw, -120vw);
      opacity: .8;
    }
    50% {
      transform: translate3d(2vw, 0, -100vw);
      opacity: .95;
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
`