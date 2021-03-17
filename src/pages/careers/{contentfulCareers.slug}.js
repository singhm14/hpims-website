import React from 'react'

// Libraries
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'

// Sections
import Hero from 'sections/career/hero'
import Sidebar from 'sections/career/sidebar'

const StyledContainer = styled(Container)`
  max-width: 928px;

  .sidebar-layout--big {
    .sidebar {
      ${breakpoint.medium`
        width: 352px;
      `}
    }
  }
`

const Careers = (props) => {
  const { contentfulCareers: data } = props.data

  return (
    <React.Fragment>
      <Hero data={data} />
      <StyledContainer>
        <div className="sidebar-layout sidebar-layout--big">
          <div className="sidebar">
            <Sidebar data={data} />
          </div>
          <div className="content"></div>
        </div>
      </StyledContainer>
    </React.Fragment>
  )
}

export default Careers

export const query = graphql`
  query($id: String) {
    contentfulCareers(id: { eq: $id }) {
      jobTitle
      slug
      jobSummary {
        jobSummary
      }
      applicationInstructions {
        json
      }
      jobDetails {
        json
      }
    }
  }
`
