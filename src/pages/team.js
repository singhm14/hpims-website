import React from 'react'

// Sections
import Hero from 'sections/team/hero'
import Filters from 'sections/team/filters'
import TeamMembers from 'sections/team/team-members'

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
        </div>
      </div>
    </Container>
  </React.Fragment>
)

export default Team
