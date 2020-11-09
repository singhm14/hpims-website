import React from 'react'

// Libraries
import styled from 'styled-components'
import { graphql } from 'gatsby'

// Sections
import Hero from 'sections/research-project/hero'
import Content from 'sections/research-project/content'
import Sidebar from 'sections/research-project/sidebar'

// Components
import SEO from 'components/seo/'

// Components
import Container from 'components/container/'

const StyledContainer = styled(Container)`
  max-width: 928px;
`

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
      description {
        json
      }
      teamMembers {
        id
        name
        profilePicture {
          fluid(maxWidth: 128, quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      callToAction {
        id
        title
        description {
          description
        }
        linkLabel
        linkUrl
      }
    }
  }
`

const ResearchProject = (props) => (
  <div data-aos="fade">
    <SEO title={props.data.contentfulResearchProjects.title + ' | Hasso Plattner Institute for Digital Health at Mount Sinai'} />
    <Hero data={props.data} />
    <StyledContainer>
      <div className="sidebar-layout sidebar-layout--big">
        <div className="sidebar">
          <Sidebar data={props.data} />
        </div>
        <div className="content">
          <Content data={props.data} />
        </div>
      </div>
    </StyledContainer>
  </div>
)

export default ResearchProject
