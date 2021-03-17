import React from 'react'

// Libraries
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import SEO from 'components/seo/'
import Container from 'components/container/'

// Sections
import Hero from 'sections/career/hero'
import Sidebar from 'sections/career/sidebar'
import Content from 'sections/career/content'

const StyledContainer = styled(Container)`
  max-width: 928px;

  .sidebar-layout--big {
    .sidebar {
      ${breakpoint.medium`
        width: 352px!important;
      `}
    }
  }
`

const Careers = (props) => {
  const { contentfulCareers: data } = props.data

  return (
    <React.Fragment>
      <SEO title={data.jobTitle + ' | Hasso Plattner Institute for Digital Health at Mount Sinai'} description={data.jobSummary.jobSummary} />
      <Hero data={data} />
      <StyledContainer>
        <div className="sidebar-layout sidebar-layout--big">
          <div className="sidebar">
            <Sidebar data={data} />
          </div>
          <div className="content">
            <Content data={data} />
          </div>
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
