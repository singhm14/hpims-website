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
  max-height: 800px;
  height: 100vh;
  position: relative;

  h1,
  p {
    max-width: 640px;
  }

  .hero__collaboration {
    position: absolute;
    right: 24px;
    bottom: 24px;

    ${breakpoint.small`
      right: 48px;
      bottom: 48px;
    `}

    ${breakpoint.large`
      right: calc((100vw - 1120px) / 2);
    `}
  }

  .hero__background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: calc((100vw - 1440px) / 2);
    z-index: -1;
  }
`

const Hero = () => (
  <StyledHero>
    <Container>
      <h1 className="color--blue500">Shaping the future of digital health</h1>
      <br />
      <p className="color--black paragraph--large">We are a global research institute rapidly developing digital health solutions that empower patients and healthcare providers.</p>
    </Container>

    <Collaboration className="hero__collaboration" />

    <Background className="hero__background" />
  </StyledHero>
)

export default Hero
