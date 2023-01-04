import React from "react";

// Libraries
import styled from "styled-components";
import { Link } from "gatsby";

// Utils
import breakpoint from "utils/breakpoints/";

// Components
import PageHero from "components/hero/";
import Container from "components/container/";

// Icons
import StudentsProjectsIcon from "assets/icons/icon-students-projects.inline.svg";

const StyledHero = styled(PageHero)`
  min-height: 520px;
  position: relative;
  overflow: hidden;

  ${Container} {
    max-width: 928px;
  }

  .title {
    ${breakpoint.medium`
      max-width: 736px;
    `}
  }

  p {
    max-width: 640px;
  }

  .hero__icon {
    width: 112px;
    height: 112px;
    position: absolute;
    top: 24px;
    right: 0;

    ${breakpoint.small`
      width: 224px;
      height: 224px;
      top: 0;
      right: 0;
    `}

    ${breakpoint.medium`
      width: 310px;
      height: 310px;
      top: calc((100% - 310px + 80px) / 2);
      right: -64px;
    `}

    ${breakpoint.extraLarge`
      right: auto;
      left: calc(100vw - 310px - 64px);
    `}
  }
`;

const Hero = (props) => {
  return (
    <StyledHero className="color--black gradient--secondary">
      <Container>
        <p className="subtitle breadcrumb color--black">
          <Link to="/research">Research / </Link>
          Projects
        </p>

        <h2 className="title color--blue500">
          Co-Innovation Research Exchange
        </h2>
        <p className="paragraph--large">
          HPI·MS has developed an interdisciplinary research exchange and
          educational program wherein students of the HPI Digital Health program
          apply advanced data engineering and machine-learning approaches to
          interrogate Mount Sinai clinical data in research projects supervised
          jointly by Mount Sinai and HPI faculty.
        </p>
      </Container>

      <StudentsProjectsIcon className="hero__icon" />
    </StyledHero>
  );
};

export default Hero;
