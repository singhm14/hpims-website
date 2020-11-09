import React from 'react'

// Components
import Container from 'components/container/'

// Sections
import Hero from 'sections/publications/hero'
import Filters from 'sections/publications/filters'
import PublicationsList from 'sections/publications/publications-list'

const Publications = () => (
  <React.Fragment>
    <Hero />
    <Container>
      <div className="sidebar-layout">
        <div className="sidebar">
          <Filters />
        </div>
        <div className="content">
          <PublicationsList />
        </div>
      </div>
    </Container>
  </React.Fragment>
)

export default Publications
