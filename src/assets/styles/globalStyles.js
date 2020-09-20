import { createGlobalStyle } from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Helpers
import { Helpers } from './helpers'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 1.38em;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 600;
    line-height: 1.13em;
  }

  h1 {
    font-size: 40px;

    ${breakpoint.medium`
      font-size: 64px;
    `}
  }

  h2 {
    font-size: 40px;
    line-height: 1.2em;

    ${breakpoint.medium`
      font-size: 52px;
    `}
  }

  h3 {
    font-size: 32px;
    line-height: 1.2em;

    ${breakpoint.medium`
      font-size: 40px;
    `}
  }

  h4 {
    font-size: 28px;
    
    ${breakpoint.medium`
      font-size: 32px;
    `}
  }

  h5 {
    font-size: 20px;
    line-height: 24px;

    ${breakpoint.medium`
      font-size: 22px;
      line-height: 28px;
    `}
  }

  p {
    margin: 0;

    &.paragraph--large {
      font-size: 18px;
      line-height: 26px;
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
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;

      ${breakpoint.medium`
        font-size: 16px;
      `}
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

  .sidebar-layout {
    display: flex;
    flex-wrap: wrap;
    padding: 60px 0;

    ${breakpoint.small`
      flex-wrap: nowrap;
    `}

    ${breakpoint.medium`
      padding: 80px 0;
    `}

    .sidebar {
      width: 100%;
      margin-bottom: 32px;

      ${breakpoint.small`
        width: 240px;
        margin-right: 32px;
        margin-bottom: 0;
      `}

      ${breakpoint.medium`
        margin-right: 48px;
      `}
    }

    .content {
      width: 100%;

      ${breakpoint.small`
        width: calc(100% - 240px - 32px);
      `}

      ${breakpoint.medium`
        width: calc(100% - 240px - 48px);
      `}
    }
  }

  ${Helpers}
`

export default GlobalStyles
