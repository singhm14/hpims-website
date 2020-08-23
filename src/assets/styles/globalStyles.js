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

  a {
    color: inherit;
    text-decoration: none;
    transition: all .3s;
  }

  ${Helpers}
`

export default GlobalStyles
