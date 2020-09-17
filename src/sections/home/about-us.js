import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'
import Img from 'gatsby-image'
import { Tertiary } from 'components/buttons/'

const StyledAboutUs = styled.section`
  padding-top: 64px;
  text-align: center;

  ${breakpoint.medium`
    padding-top: 36px;
  `}

  .section__title {
    max-width: 424px;
    margin: 0;
    text-align: left;

    h3 {
      margin-bottom: 32px;
    }

    p {
      font-size: 14px;

      ${breakpoint.medium`
        max-width: 544px;
      `}

      ${breakpoint.large`
        font-size: 16px;
      `}
    }
  }

  .about__link {
    margin-top: 16px;
  }
`

const AboutUs = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/about-us-video-placeholder.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <StyledAboutUs>
      <Container>
        <div className="section__title">
          <p className="section__subtitle color--black">About Us</p>
          <h3 className="color--blue500">Turning the promise of digital health into a reality</h3>
          <p>Science has helped humanity to improve and extend life. Today, technological advances have allowed us to understand and analyze information in ways never before possible.</p>
          <br />
          <p>The Hasso Plattner Institute for Digital Health at Mount Sinai (HPI･MS) propels these possibilities through an extraordinary international academic collaboration between the Hasso Plattner Institute for Digital Engineering in Potsdam, Germany, and the Mount Sinai Health System in New York City, USA.</p>

          <Tertiary to="/about" className="about__link color--blue300 color-hover--blue500 font-weight--600 svg--stroke-blue300 svg-hover--stroke-blue500" text="Learn more about us" />
        </div>
      </Container>

      <Img className="about-us__image" fluid={data.file.childImageSharp.fluid} alt="About Us" />
    </StyledAboutUs>
  )
}

export default AboutUs
