import React from 'react'

// Components
import PageHero from 'components/hero/'
import Container from 'components/container/'

const Hero = () => (
  <PageHero className="gradient--primary color--white">
    <Container className="container">
      <p className="subtitle">Careers</p>
      <h1 className="title">Join our team</h1>
      <p className="paragraph--large">We are looking for exceptional team members to join our revolution in digital health! HPI·MS is calling on all those with a passion for improved healthcare and translational data science to share their knowledge and expertise with an international community motivated by the same call to action.</p>
    </Container>
  </PageHero>
)

export default Hero
