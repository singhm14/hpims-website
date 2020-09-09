import React from 'react'

// Libraries
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'
import PageHero from 'components/hero/'

// Icons
import Background from 'assets/icons/home/hero-background.inline.svg'
import Collaboration from 'assets/icons/home/hero-foot-note.inline.svg'

const StyledHero = styled(PageHero)`
  width: 100%;
  max-height: 900px;
  position: relative;
  align-items: flex-start;
  padding-top: 96px;
  overflow: hidden;
  z-index: 100;

  ${breakpoint.small`
    min-height: 500px;
    padding-top: 72px;
  `}

  ${breakpoint.medium`
    min-height: 700px;
    padding-top: 120px;
  `}

  ${breakpoint.extraLarge`
    min-height: 900px;
    padding-top: 184px;
  `}

  h1,
  p {
    max-width: 394px;

    ${breakpoint.medium`
      max-width: 576px;
    `}
  }

  .hero__collaboration {
    display: none;

    ${breakpoint.small`
      position: absolute;
      right: 48px;
      bottom: 48px;
      display: block;
    `}

    ${breakpoint.large`
      right: calc((100vw - 1120px) / 2);
    `}
  }

  .hero__background--desktop {
    display: none;

    ${breakpoint.small`
      top: 0;
      right: 0;
      bottom: 0;
      left: calc((100vw - 1444px) / 2);
      position: absolute;
      display: block;
      z-index: -1;

      svg {
        max-width: initial!important;
        width: 1444px;
        height: 500px;
      }
    `}

    ${breakpoint.medium`
      left: calc((100vw - 2022px) / 2);

      svg {
        width: 2022px;
        height: 700px;
      }
    `}

    ${breakpoint.extraLarge`
      left: calc((100vw - 2600px) / 2);

      svg {
        width: 2600px;
        height: 900px;
      }
    `}
  }
`

const Hero = () => (
  <StyledHero>
    <Container>
      <h1 className="color--white">Shaping the future of digital health</h1>
      <br />
      <p className="color--white paragraph--large">We are a global research institute rapidly developing digital health solutions that empower patients and healthcare providers.</p>
    </Container>

    <Collaboration className="hero__collaboration" />

    <div className="hero__background--desktop">
      <Background />
    </div>
  </StyledHero>
)

export default Hero
