import React from 'react'

// Components
import PageHero from 'components/hero/'
import Container from 'components/container/'

const Hero = () => (
  <PageHero className="gradient--primary color--white">
    <Container className="container">
      <p className="subtitle">Research</p>
      <h2 className="title">Leading the digital health revolution</h2>
      <p className="paragraph--large">Our research leverages the latest technologies to create novel methodologies and bring together interdisciplinary expertise.</p>
    </Container>
  </PageHero>
)

export default Hero
