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

      .bg-hover--${name} {
        
        &:hover {
          background-color: ${color};
        }
      }

      // Borders
      .border--${name} {
        border: 1px solid ${color};
      }

      .border-hover--${name} {
        
        &:hover {
          border: 1px solid ${color};
        }
      }

      // SVG Fills
      .svg--fill-${name} {
      
        *,
        svg * {
          fill: ${color};
        }
      }

      .svg-hover--fill-${name} {
      
        &:hover {
          *,
          svg * {
            fill: ${color};
          }
        }
      }

      // SVG Strokes
      .svg--stroke-${name} {

        *,
        svg * {
          stroke: ${color};
        }
      }

      .svg-hover--stroke-${name} {

        &:hover {
          *,
          svg * {
            stroke: ${color};
          }
        }
      }
    `
  })

  return css`
    ${styles}
  `
}
