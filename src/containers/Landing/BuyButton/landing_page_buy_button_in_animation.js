import { keyframes } from '@emotion/core'

export default keyframes`
    from {
      transform: translate3d(30vw, -25vw, -100vw) scale(.1);
      opacity: .8;
    }
    to {
      transform: translateY(0, 0, 0) scale(1);
      opacity: 1;
     
    }
`