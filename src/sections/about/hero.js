import React from 'react'

// Components
import Hero from 'components/hero/'
import Container from 'components/container/'

export default () => (
  <Hero className="color--black">
    <Container>
      <p className="subtitle">About</p>
      <h1 className="title color--blue500">Turning the promise of digital health into a reality</h1>
      <p className="paragraph--large">This extraordinary collaboration allows us to combine data science, biomedical and digital engineering, and health care expertise to offer unprecedented opportunities for healthcare. Our goal is to turn the promise of digital health into a reality, being the driver of innovations that will revolutionize the way in which people think about their personal health and health systems, generating real impact in people’s lives.</p>
    </Container>
  </Hero>
)
