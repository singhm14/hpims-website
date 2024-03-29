import React from "react";

// Libraries
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

// Utils
import breakpoint from "utils/breakpoints/";
import { colors } from "utils/variables/";
import { getSlug } from "utils/functions/";

// Components
import Container from "components/container/";
import Grid from "components/grid/";
import { Tertiary } from "components/buttons/";

const StyledLabs = styled.section`
  padding: 64px 0;

  ${breakpoint.medium`
    padding: 120px 0;
  `}

  ${Container} {
    max-width: 928px;
  }

  h2 {
    margin-bottom: 32px;

    ${breakpoint.medium`
      margin-bottom: 48px;
    `}
  }

  .lab-card {
    height: 150px;
    display: flex;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);

    ${breakpoint.medium`
      height: 200px;
    `}

    .lab__image {
      width: 131px;
      flex-shrink: 0;

      ${breakpoint.medium`
        width: 160px;
      `}
    }

    .lab__content {
      width: calc(100% - 131px);
      display: flex;
      flex-wrap: wrap;
      padding: 24px;
      background-color: ${colors.white};

      ${breakpoint.medium`
        width: calc(100% - 160px);
        padding: 32px;
      `}

      h4 {
        width: 100%;
      }

      a {
        align-self: flex-end;
      }
    }
  }
`;

const Labs = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulContentOrder {
        labs {
          id
          title
          headOfTheLab {
            name
            profilePicture {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  return (
    <StyledLabs>
      <Container>
        <h2 className="color--blue500">Our Labs</h2>
        <Grid gutter="32" columns="2">
          {data.contentfulContentOrder.labs.map((lab, index) => (
            <div
              className="grid__item"
              data-aos="fade"
              data-aos-delay={150 * index}
              key={lab.id}>
              <div className="lab-card">
                <GatsbyImage
                  image={getImage(lab.headOfTheLab.profilePicture)}
                  style={{
                    backgroundSize: "cover",
                  }}
                  className="lab__image"
                />
                <div className="lab__content">
                  <h4 className="color--blue500 font-weight--600">
                    {lab.title}
                  </h4>
                  <Tertiary
                    className="color--blue300 color-hover--blue500 font-weight--600 svg-stroke--blue300 svg-hover--stroke-blue500"
                    to={"/labs/" + getSlug(lab.title)}
                    text="View Lab"
                  />
                </div>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </StyledLabs>
  );
};

export default Labs;
