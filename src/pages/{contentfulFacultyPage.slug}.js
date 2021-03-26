import React from 'react'

// Libraries
import { graphql } from 'gatsby'

// Sections
import Hero from 'sections/faculty/hero'

const Faculty = (props) => {
  const { contentfulFacultyPage: data } = props.data
  return <Hero data={data} />
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
        title
        subtitle
        content {
          json
        }
      }
    }
  }
`
