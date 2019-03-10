import { keyframes } from '@emotion/core'

export default keyframes`
    from {
      transform: translate3d(-10vw, -100vw, 25vw) scale(.3);
      opacity: .8;
    }
    to {
      transform: translateY(0, 0, 0) scale(1);
      opacity: 1;
     
    }
`