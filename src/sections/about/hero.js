import React from "react";

// Libraries
import styled from "styled-components";

// Utils
import breakpoint from "utils/breakpoints/";

// Components
import Hero from "components/hero/";
import Container from "components/container/";

// Icons
import Background from "assets/icons/about/hero-background.inline.svg";

const StyledHero = styled(Hero)`
  position: relative;
  padding-bottom: 64px;

  .hero__background {
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    z-index: -1;

    svg {
      max-width: 664px;
      width: 664px;
      height: auto;
      position: relative;
      left: calc((100vw - 664px) / 2);

      ${breakpoint.small`
        max-width: 1120px;
        width: 1120px;
        left: calc((100vw - 1120px) / 2);
      `}

      ${breakpoint.medium`
        max-width: 1776px;
        max-height: 600px;
        width: 1776px;
        left: calc((100vw - 1776px) / 2);
      `}

      ${breakpoint.extraLarge`
        max-width: 2600px;
        max-height: 878px;
        width: 2600px;
        left: calc((100vw - 2600px) / 2);
      `}
    }
  }

  .title {
    max-width: 640px;
  }

  p {
    max-width: 498px;
    font-size: 14px;

    ${breakpoint.medium`
      max-width: 544px;
      font-size: 16px;
    `}
  }
`;

const AboutHero = () => (
  <StyledHero className="color--black">
    <div className="hero__background">
      <Background />
    </div>

    <Container className="container">
      <p className="subtitle">About</p>
      <h2 className="title color--blue500">
        Turning the promise of digital health into a reality
      </h2>
      <p className="">
        Our goal is to turn the promise of digital health into reality by being
        the driver of innovation that will revolutionize the way in which people
        think about their personal health and health systems, generating real
        impact in people’s lives.
      </p>
    </Container>
  </StyledHero>
);

export default AboutHero;
