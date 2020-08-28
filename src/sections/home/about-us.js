import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'
import Img from 'gatsby-image'

const StyledAboutUs = styled.section`
  padding: 60px 0 0 0;
  text-align: center;

  ${breakpoint.medium`
    padding: 120px 0 0 0;
  `}

  .section__title {
    margin-left: auto;
    margin-right: auto;
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

      <Img fluid={data.file.childImageSharp.fluid} alt="About Us" />
    </StyledAboutUs>
  )
}

export default AboutUs
