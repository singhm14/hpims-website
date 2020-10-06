import React from 'react'

// Libraries
import styled from 'styled-components'
import { graphql } from 'gatsby'

// Sections
import Hero from 'sections/research-project/hero'
import Content from 'sections/research-project/content'

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
    }
  }
`

const ResearchProject = (props) => (
  <React.Fragment>
    <Hero data={props.data} />
    <StyledContainer>
      <div className="sidebar-layout">
        <div className="sidebar"></div>
        <div className="content">
          <Content data={props.data} />
        </div>
      </div>
    </StyledContainer>
  </React.Fragment>
)

export default ResearchProject
