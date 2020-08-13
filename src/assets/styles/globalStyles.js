import { createGlobalStyle } from 'styled-components'

// Helpers
import { Helpers } from './helpers'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Inter", sans-serif;
  }

  ${Helpers}
`

export default GlobalStyles
