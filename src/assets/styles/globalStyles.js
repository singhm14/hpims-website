import { createGlobalStyle } from 'styled-components'

// Helpers
import { Helpers } from './helpers'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Inter", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all .3s;
  }

  ${Helpers}
`

export default GlobalStyles
