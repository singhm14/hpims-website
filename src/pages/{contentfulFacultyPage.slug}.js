import React from 'react'

// Libraries
import { graphql } from 'gatsby'

// Components
import FacultySection from 'components/faculty-section/'

// Sections
import Hero from 'sections/faculty/hero'

const Faculty = (props) => {
  const { contentfulFacultyPage: data } = props.data
  return (
    <React.Fragment>
      <Hero data={data} />
      {data.sections.map((section) => (
        <FacultySection data={section} />
      ))}
    </React.Fragment>
  )
}

export default Faculty

export const query = graphql`
  query($id: String) {
    contentfulFacultyPage(id: { eq: $id }) {
      title
      pageDescription {
        json
      }
      sections {
        layoutArrangement
        backgroundStyle
        image {
          fluid(maxWidth: 928, quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        title
        subtitle
        content {
          json
        }
      }
    }
  }
`
