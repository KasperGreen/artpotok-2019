import { css } from '@emotion/core'

export default css`
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    > * {
      will-change: transform;
      top: 0;
      left: 0;
      position: absolute;
    }
`