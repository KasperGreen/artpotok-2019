import { css } from '@emotion/core'

export default css`
> div {
  overflow: hidden;
  height: 0;
  width: 0;
}
&:hover {
  > div {
    background: rgba(255,255,255,0.42);
    padding: 1em;
    overflow: auto;
    width: auto;
    height: auto;
  }
}
&:after {
  position: absolute;
  content: '‽';
  top: 0;
  left: 0;
}
`