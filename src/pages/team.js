import React from 'react'

// Sections
import Hero from 'sections/team/hero'
import Filters from 'sections/team/filters'
import TeamMembers from 'sections/team/team-members'
import Students from 'sections/team/students'
import CareersBanner from 'components/careers-banner/'

// Components
import Container from 'components/container/'

const Team = () => (
  <React.Fragment>
    <Hero />
    <Container>
      <div className="sidebar-layout">
        <div className="sidebar">
          <Filters />
        </div>
        <div className="content">
          <TeamMembers />
          <Students />
        </div>
      </div>
    </Container>
    <CareersBanner />
  </React.Fragment>
)

export default Team
