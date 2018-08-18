import { injectGlobal } from "styled-components"
import media from "../utils/media"
/* eslint-disable no-unused-expressions */
injectGlobal`
  html {
    height:100%;
    font-size:18px;
    ${media.giant`font-size: 17px`}
    ${media.desktop`font-size: 16px`}
    ${media.tablet`font-size: 15px`}
    ${media.phone`font-size: 14px`}
  }
  body {
    background: linear-gradient(to bottom, #05abe0 0%,#15b4e4 32%,#2390b9 82%);
    background-attachment: fixed;    
  }
`
/* eslint-enable */
