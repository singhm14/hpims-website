import React from 'react'

// Sections
import Hero from 'sections/students-projects/hero'

const StudentsProjects = (props) => (
  <React.Fragment>
    <Hero data={props.data} />
  </React.Fragment>
)

export default StudentsProjects
