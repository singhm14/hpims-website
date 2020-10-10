import React from 'react'

// Libraries
import { graphql } from 'gatsby'

// Sections
import Hero from 'sections/lab/hero'
import Bio from 'sections/lab/bio'

const Lab = props => {
  return (
    <React.Fragment>
      <Hero />
      <Bio data={props.data} />
    </React.Fragment>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulLabs(id: { eq: $id }) {
      name
      summary {
        summary
      }
      headOfTheLab {
        profilePicture {
          fluid(maxWidth: 352, quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

export default Lab