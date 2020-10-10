import React from 'react'

// Libraries
import { graphql } from 'gatsby'

// Sections
import Hero from 'sections/lab/hero'
import Bio from 'sections/lab/bio'

// Components
import SEO from 'components/seo/'

const Lab = props => {
  const title = props.data.contentfulLabs.name
  const summary = props.data.contentfulLabs.summary.summary
  
  return (
    <React.Fragment>
      <SEO
        title={title + " | Hasso Plattner Institute for Digital Health at Mount Sinai"}
        description={summary}
      />
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