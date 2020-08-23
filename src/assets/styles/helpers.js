// Libraries
import { css } from 'styled-components'

// Utils
import { colors } from 'utils/variables/'

export const Helpers = () => {
  let styles = ''

  Object.entries(colors).forEach(([name, color]) => {
    styles += `
      // Text color classes
      .color--${name} {
        color: ${color};
      }

      // Hover color classes
      .color-hover--${name} {
        
        &:hover {
          color: ${color};
        }
      }

      // Background color classes
      .bg--${name} {
        background-color: ${color};
      }
    `
  })

  return css`
    ${styles}
  `
}
