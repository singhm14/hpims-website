import React from "react";

// Libraries
import styled from "styled-components";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

// Utils
import breakpoint from "utils/breakpoints/";

// Components
import PageHero from "components/hero/";
import Container from "components/container/";

const StyledHero = styled(PageHero)`
  min-height: 520px;
  padding-top: 168px;
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
    top: 72px;
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
  const title = props.data.contentfulResearchProjects.title;
  const description = props.data.contentfulResearchProjects.summary.summary;
  const icon = props.data.contentfulResearchProjects.icon;

  return (
    <StyledHero className="color--black gradient--secondary">
      <Container>
        <p className="subtitle breadcrumb color--black">
          <Link to="/research">Research / </Link>
          Projects
        </p>

        <h2 className="title color--blue500">{title}</h2>
        <p className="paragraph--large">{description}</p>
      </Container>

      {icon && (
        <GatsbyImage
          className="hero__icon"
          image={getImage(icon.fluid)}
          style={{ position: "absolute" }}
          alt={title}
        />
      )}
    </StyledHero>
  );
};

export default Hero;
