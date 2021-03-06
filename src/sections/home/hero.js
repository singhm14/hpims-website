import React from 'react'

// Libraries
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'
import PageHero from 'components/hero/'

// Icons
import BackgroundMobile from 'assets/icons/home/hero-background-mobile.inline.svg'
import Background from 'assets/icons/home/hero-background.inline.svg'
import HassoPlatner from 'assets/icons/logo-hasso-plattner-institut.inline.svg'
import MountSinai from 'assets/icons/logo-mount-sinai.inline.svg'

const StyledHero = styled(PageHero)`
  width: 100%;
  min-height: 560px;
  position: relative;
  align-items: flex-start;
  padding-top: 120px;
  overflow: hidden;
  z-index: 100;

  ${breakpoint.small`
    min-height: 500px;
    padding-top: 128px;
  `}

  ${breakpoint.medium`
    min-height: 700px;
    padding-top: 200px;
  `}

  ${breakpoint.extraLarge`
    min-height: 900px;
    padding-top: 264px;
  `}

  .hero__content {

    h2 {
      max-width: 258px;
      margin-bottom: 24px;
      letter-spacing: -0.01em;

      ${breakpoint.small`
        max-width: 394px;
      `}

      ${breakpoint.medium`
        max-width: 423px;
        font-size: 48px;
      `}

      ${breakpoint.extraLarge`
        max-width: 576px;
        font-size: 64px;
      `}
    }

    p {
      max-width: 258px;
      font-size: 14px;
      line-height: 20px;

      ${breakpoint.small`
        max-width: 312px;
      `}

      ${breakpoint.medium`
        max-width: 423px;
        font-size: 16px;
        line-height: 22px;
      `}

      ${breakpoint.extraLarge`
        max-width: 448px;
        font-size: 18px;
        line-height: 26px;
      `}
    }
  }

  .hero__collaboration {
    position: absolute;
    right: 16px;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    text-align: right;

    ${breakpoint.small`
      right: 40px;
      bottom: 60px;
    `}

    ${breakpoint.medium`
      bottom: 80px;
    `}

    ${breakpoint.large`
      right: calc((100vw - 1120px) / 2);
    `}

    ${breakpoint.extraLarge`
      bottom: 140px;
      flex-wrap: nowrap;
      align-items: center;
    `}

    p {
      width: 100%;
      margin-bottom: 8px;
      font-size: 12px;

      ${breakpoint.small`
        font-size: 14px;
      `}

      ${breakpoint.extraLarge`
        width: auto;
        margin-right: 24px;
        margin-bottom: 16px;
      `}
    }

    .icons {
      display: flex;

      svg {
        max-width: auto!important;
        width: auto!important;
        height: 27px;
        filter: grayscale(100%);
        opacity: 0.5;
        transition: all 0.3s;

        &:hover {
          filter: grayscale(0);
          opacity: 1;
        }

        ${breakpoint.medium`
          height: 52px;
        `}
      }
    }
  }

  .hero__background--mobile {
    width: 100vw;
    height: 560px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
    
    ${breakpoint.small`
      display: none;
    `}

    svg {
      max-width: 719px;
      width: 719px;
      height: 100%;

      @media screen and (min-width: 719px) {
        max-width: 768px;
        width: 768px;
        height: auto;
      }
    }
  }

  .hero__background--desktop {
    top: 0;
    bottom: 0;
    left: calc((100vw - 1200px) / 2);
    position: absolute;
    display: none;
    z-index: -1;

    svg {
      max-width: initial!important;
      width: 1440px;
      height: 500px;
    }

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
      <div className="hero__content">
        <h2 className="color--white">Shaping the future of digital health</h2>
        <p className="color--white paragraph--large">We are a global research institute rapidly developing digital health solutions that empower patients and healthcare providers.</p>
      </div>
    </Container>

    <div className="hero__collaboration">
      <p className="color--grey900">A collaboration between</p>
      <div className="icons">
        <a href="https://hpi.de/en/index.html" target="_blank" rel="noopener noreferrer" title="Hasso Plattnet Institut">
          <HassoPlatner />
        </a>
        <a href="https://www.mountsinai.org/" target="_blank" rel="noopener noreferrer" title="Mount Sinai">
          <MountSinai />
        </a>
      </div>
    </div>

    <div className="hero__background--mobile">
      <BackgroundMobile />
    </div>

    <div className="hero__background--desktop">
      <Background />
    </div>
  </StyledHero>
)

export default Hero
