import React from 'react'

// Libraries
import { graphql } from 'gatsby'

// Sections
import Hero from 'sections/career/hero'

const Careers = (props) => {
  const { contentfulCareers: data } = props.data

  return (
    <React.Fragment>
      <Hero data={data} />
    </React.Fragment>
  )
}

export default Careers

export const query = graphql`
  query($id: String) {
    contentfulCareers(id: { eq: $id }) {
      jobTitle
      slug
    }
  }
`
