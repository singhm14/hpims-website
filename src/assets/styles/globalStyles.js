import { createGlobalStyle } from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Helpers
import { Helpers } from './helpers'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 1.5em;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 600;
    line-height: 1.15em;
  }

  h1 {

    ${breakpoint.medium`
      font-size: 68px;
    `}
  }

  h2 {

    ${breakpoint.medium`
      font-size: 44px;
    `}
  }

  h3 {

    ${breakpoint.medium`
      font-size: 32px;
    `}
  }

  h4 {
    
    ${breakpoint.medium`
      font-size: 24px;
    `}
  }

  p {
    margin: 0;

    &.paragraph--large {
      font-size: 18px;
    }

    &.paragraph--small {
      font-size: 14px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all .3s;
  }

  ${Helpers}
`

export default GlobalStyles
