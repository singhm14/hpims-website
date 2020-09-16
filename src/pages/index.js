import React from 'react'

// Libraries
import Helmet from 'react-helmet'

// Sections
import Hero from 'sections/home/hero'
import AboutUs from 'sections/home/about-us'
import WhyHPIMS from 'sections/home/why-hpims'
import ResearchProjects from 'sections/home/research-projects'
import Publications from 'sections/home/publications'
import News from 'sections/home/news'
import LastEvent from 'sections/home/last-event'

const Home = () => (
  <React.Fragment>
    <Helmet>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Helmet>
    <Hero />
    <AboutUs />
    <WhyHPIMS />
    <ResearchProjects />
    <Publications />
    <News />
    <LastEvent />
  </React.Fragment>
)

export default Home
