import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'
import Img from 'gatsby-image'

// Icons
import Logo from 'assets/icons/icon-logo.inline.svg'

const StyledAboutUs = styled.section`
  padding: 60px 0;
  text-align: center;

  ${breakpoint.medium`
    padding: 120px 0;
  `}

  .section__title {
    margin-left: auto;
    margin-right: auto;
  }

  .about-us__image {
    margin-bottom: 40px;

    ${breakpoint.medium`
      margin-bottom: 80px;
    `}
  }

  .about-us__description {
    max-width: 928px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    text-align: left;

    .logo {
      max-width: 302px;
      margin-bottom: 24px;
    }

    .summary {
      max-width: 544px;
    }
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
        <p className="section__subtitle color--black">About Us</p>
        <h2 className="section__title color--blue500">Turning the promise of digital health into a reality</h2>
      </Container>

      <Img className="about-us__image" fluid={data.file.childImageSharp.fluid} alt="About Us" />

      <Container>
        <div className="about-us__description">
          <div className="logo">
            <Logo />
          </div>

          <div className="summary">
            <h4 className="color--blue500">Science has helped humanity to improve and extend life. Today, technological advances have allowed us to understand and analyze information in ways never before possible. </h4>
            <br />
            <p>The Hasso Plattner Institute for Digital Health at Mount Sinai (HPI･MS) propels these possibilities through international academic collaboration between the Hasso Plattner Institute for Digital Engineering in Potsdam, Germany, and the Mount Sinai Health System in New York City, USA.</p>
            <br />
          </div>
        </div>
      </Container>
    </StyledAboutUs>
  )
}

export default AboutUs
