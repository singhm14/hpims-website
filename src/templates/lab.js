import React from 'react'

// Libraries
import { graphql } from 'gatsby'

// Sections
import Hero from 'sections/lab/hero'
import Bio from 'sections/lab/bio'
import References from 'sections/lab/references'

// Components
import SEO from 'components/seo/'

const Lab = (props) => {
  const title = props.data.contentfulLabs.title
  const summary = props.data.contentfulLabs.summary.summary

  return (
    <div data-aos="fade">
      <SEO title={title + ' | Hasso Plattner Institute for Digital Health at Mount Sinai'} description={summary} />
      <Hero />
      <Bio data={props.data} />
      <References data={props.data} />
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulLabs(id: { eq: $id }) {
      title
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
      description {
        json
      }
      projects {
        title
        icon {
          fixed(width: 56, quality: 100) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
      teamMembers {
        ... on ContentfulTeamMembers {
          __typename
          name
        }

        ... on ContentfulStudents {
          __typename
          name
        }
      }
    }
  }
`

export default Lab
