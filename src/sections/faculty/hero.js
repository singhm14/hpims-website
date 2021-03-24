import React from 'react'

// Libraries
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'

const StyledHero = styled.section`
  padding-top: 120px;

  ${breakpoint.medium`
    padding-top: 200px;
  `}

  ${Container} {
    max-width: 928px;
  }

  .hero__content {
    max-width: 640px;
  }

  .hero__title {
    margin: 16px 0 32px 0;
  }
`

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <div className="hero__content">
          <p className="hero__subtitle color--blue500 font-weight--600">Faculty</p>
          <h2 className="hero__title color--blue300">Faculty Recruitment</h2>
          <p className="paragraph--large">HPI.MS is seeking applications of early and mid-career faculty researchers in machine learning, artificial intelligence, and computer science for scholarship that impacts human health. </p>
          <br />
          <p className="paragraph--large">Applications from women, minorities, and residents of all countries are strongly encouraged.</p>
        </div>
      </Container>
    </StyledHero>
  )
}

export default Hero
