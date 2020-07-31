import { css } from "styled-components"
import { breakpoints } from "../variables/" // Breakpoint variables

export default Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})
