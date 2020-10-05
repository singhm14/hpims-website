import React from 'react'

// Libraries
import { graphql } from 'gatsby'

// Sections
import Hero from 'sections/research-project/hero'

export const query = graphql`
  query($id: String!) {
    contentfulResearchProjects(id: { eq: $id }) {
      title
      summary {
        summary
      }
      icon {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

const ResearchProject = (props) => (
  <React.Fragment>
    <Hero data={props.data} />
  </React.Fragment>
)

export default ResearchProject
