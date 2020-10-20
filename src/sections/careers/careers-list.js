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
`

const CareersList = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCareers {
        nodes {
          id
          jobTitle
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
        <Grid gutter="32" columns="1">
          {data.allContentfulCareers.nodes.map((career) => (
            <div className="grid__item" data-aos="indicius-slide-up">
              <CareersCard key={career.id} title={career.jobTitle} summary={career.jobSummary.jobSummary} requirements={career.requirementsSummary} applicationInstructions={career.applicationInstructions} details={career.jobDetails} />
            </div>
          ))}
        </Grid>
      </Container>
    </StyledCareersList>
  )
}

export default CareersList
