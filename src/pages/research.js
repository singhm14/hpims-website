import React from 'react'

// Sections
import Hero from 'sections/research/hero'
import CuttingEdge from 'sections/research/cutting-edge'
import CoreProjects from 'sections/research/core-projects'
import Labs from 'sections/research/labs'
import CareersBanner from 'components/careers-banner/'

const Research = () => (
  <div data-aos="fade">
    <Hero />
    <CuttingEdge />
    <CoreProjects />
    <Labs />
    <CareersBanner />
  </div>
)

export default Research
