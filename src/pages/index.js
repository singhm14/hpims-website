import React from 'react'

// Sections
import Hero from 'sections/home/hero'
import ResearchProjects from 'sections/home/research-projects'
import Publications from 'sections/home/publications'

const Home = () => (
  <React.Fragment>
    <Hero />
    <ResearchProjects />
    <Publications />
  </React.Fragment>
)

export default Home
