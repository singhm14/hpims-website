import React from 'react'

// Libraries
import styled from 'styled-components'

// Components
import Hero from 'components/hero/'
import Container from 'components/container/'

const StyledHero = styled(Hero)`
  .title {
    max-width: 640px;
  }
`

export default () => (
  <StyledHero className="color--black">
    <Container className="container">
      <p className="subtitle">About</p>
      <h1 className="title color--blue500">Turning the promise of digital health into a reality</h1>
      <p>
        This extraordinary collaboration allows us to combine data science, biomedical and digital engineering, and health care expertise to offer unprecedented opportunities for healthcare. <br />
        Our goal is to turn the promise of digital health into a reality, being the driver of innovations that will revolutionize the way in which people think about their personal health and health systems, generating real impact in people’s lives.
      </p>
    </Container>
  </StyledHero>
)
