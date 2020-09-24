// Libraries
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

const Hero = styled.section`
  width: 100%;
  min-height: 670px;
  display: flex;
  align-items: center;
  padding: 120px 0 80px 0;

  ${breakpoint.medium`
    min-height: 600px;
    padding-top: 200px;
    padding-bottom: 120px;
  `}

  .container {
    max-width: 928px;
  }

  .subtitle {
    margin-bottom: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .title {
    max-width: 544px;
    margin-bottom: 32px;
    font-weight: 600;
    letter-spacing: -0.02em;

    ${breakpoint.medium`
      font-size: 52px;
    `}
  }

  p {
    max-width: 544px;
  }
`

export default Hero
