import { createGlobalStyle } from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Helpers
import { Helpers } from './helpers'

const GlobalStyles = createGlobalStyle`
  body {
    padding-top: 88px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 1.5em;

    ${breakpoint.small`
      padding-top: 79px;
    `}
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 600;
    line-height: 1.15em;
  }

  h1 {
    font-size: 40px;

    ${breakpoint.medium`
      font-size: 64px;
    `}
  }

  h2 {
    font-size: 32px;

    ${breakpoint.medium`
      font-size: 52px;
    `}
  }

  h3 {
    font-size: 28px;

    ${breakpoint.medium`
      font-size: 40px;
    `}
  }

  h4 {
    font-size: 22px;
    
    ${breakpoint.medium`
      font-size: 24px;
    `}
  }

  h5 {
    font-size: 20px;
    line-height: 28px;

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

    &.paragraph--extra-small {
      font-size: 12px;
      line-height: 1.33em;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
    display: inline-block;
    transition: all 0.3s ease;
  }

  section {

    .section__title {
      max-width: 640px;
      margin-bottom: 56px;
    }

    .section__subtitle {
      margin-bottom: 16px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .section__description {
      margin-top: 16px;
    }
  }

  button {
    padding: 0;
    background: none;
    color: inherit;
    font: inherit;
    font-size: inherit;
    border: 0;
    cursor: pointer;
    outline: 0;
  }

  .no-scroll {
    overflow: hidden!important;
  }

  ${Helpers}
`

export default GlobalStyles
