import React from 'react'

// Components
import PageHero from 'components/hero/'
import Container from 'components/container/'

const Hero = () => (
  <PageHero className="gradient--primary color--white">
    <Container className="container">
      <p className="subtitle">TEAM</p>
      <h2 className="title">Leaders in<br/>Digital Health</h2>
      <p className="paragraph--large">HPI·MS is home to a diverse team of faculty, research staff, postdocs, and students combining expertise in computer science, machine learning, digital engineering, clinical informatics, and medicine. </p>
    </Container>
  </PageHero>
)

export default Hero
