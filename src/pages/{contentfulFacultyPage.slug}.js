import React from 'react'

// Libraries
import { graphql } from 'gatsby'

// Components
import SEO from 'components/seo/'
import FacultySection from 'components/faculty-section/'

// Sections
import Hero from 'sections/faculty/hero'

const Faculty = (props) => {
  const { contentfulFacultyPage: data } = props.data
  return (
    <React.Fragment>
      <SEO description="HPIMS is seeking to recruit exceptional faculty members to join the institute’s mission to impact human health. Learn more by visiting our website!" image="https://images.ctfassets.net/6cma8zf36gz0/278E5hjP55aXUOzMY0R9YF/4eed05efd940d8fe47b2995a3dc01080/Img_copy.png?w=928&h=494&q=100&fm=webp" />
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
