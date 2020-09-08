import React from 'react'

// Components
import PageHero from 'components/hero/'
import Container from 'components/container/'

const Hero = () => (
  <PageHero className="bg--blue500 color--white">
    <Container>
      <p className="subtitle">Research</p>
      <h1 className="title">Leading the digital health revolution</h1>
      <p>Our research leverages the latest technologies to create novel methodologies and bring together interdisciplinary expertise.</p>
    </Container>
  </PageHero>
)

export default Hero
