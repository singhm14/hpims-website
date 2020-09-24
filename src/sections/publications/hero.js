import React from 'react'

// Components
import PageHero from 'components/hero/'
import Container from 'components/container/'

const Hero = () => (
  <PageHero className="gradient--primary color--white">
    <Container className="container">
      <p className="subtitle">PUBLICATIONS</p>
      <h2 className="title">World class research with global impact </h2>
      <p className="paragraph--large">The HPI･MS research community actively disseminates and communicates the latest methodologies, scientific findings, and high impact discoveries.</p>
    </Container>
  </PageHero>
)

export default Hero
