import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints'

// Components
import Container from 'components/container/'
import Grid from 'components/grid/'
import CareersCard from 'components/careers-card/'

const StyledCareersList = styled.section`
  padding: 60px 0;

  ${breakpoint.medium`
    padding: 80px 0;
  `}

  ${Container} {
    max-width: 928px;
  }

  .list__title {
    margin-bottom: 32px;
  }
`

const CareersList = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulContentOrder {
        careers {
          id
          jobTitle
          slug
          jobSummary {
            jobSummary
          }
          requirementsSummary {
            json
          }
          applicationInstructions {
            json
          }
          jobDetails {
            json
          }
        }
      }
    }
  `)
  return (
    <StyledCareersList>
      <Container>
        <h5 className="list__title font-weight--600">Current Opportunities</h5>
        <Grid gutter="32" columns="1">
          {data.contentfulContentOrder.careers.map((career) => (
            <div className="grid__item" data-aos="indicius-slide-up">
              <CareersCard key={career.id} title={career.jobTitle} slug={career.slug} summary={career.jobSummary.jobSummary} />
            </div>
          ))}
        </Grid>
      </Container>
    </StyledCareersList>
  )
}

export default CareersList
