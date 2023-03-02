import React from "react";

// Libraries
import styled from "styled-components";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

// Utils
import breakpoint from "utils/breakpoints/";

// Components
import Container from "components/container/";

// Icons
import IconRibbons from "assets/icons/faculty/icon-ribbons.inline.svg";

const StyledHero = styled.section`
  position: relative;
  padding-top: 120px;

  ${breakpoint.medium`
    padding-top: 200px;
  `}

  .hero__icon {
    width: auto;
    height: 60%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;

    ${breakpoint.medium`
      height: 150%;
    `}
  }

  ${Container} {
    max-width: 928px;
  }

  .hero__content {
    max-width: 640px;

    p {
      margin-bottom: 1em;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .hero__title {
    margin: 16px 0 32px 0;
  }
`;

const Hero = (props) => {
  const { title, pageDescription } = props.data;

  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="paragraph--large">{children}</p>
      ),
    },
  };

  return (
    <StyledHero>
      <IconRibbons className="hero__icon" />
      <Container>
        <div className="hero__content">
          <p className="hero__subtitle color--blue500 font-weight--600">
            FACULTY
          </p>
          <h2 className="hero__title color--blue300">{title}</h2>
          <p>
            {pageDescription && renderRichText(pageDescription, renderOptions)}
          </p>
        </div>
      </Container>
    </StyledHero>
  );
};

export default Hero;
