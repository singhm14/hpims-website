import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'

// Components
import Container from 'components/container/'
import CareersCard from 'components/careers-card/'

export default () => {
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
    <Container>
      {data.allContentfulCareers.nodes.map((career) => (
        <CareersCard key={career.id} title={career.jobTitle} summary={career.jobSummary.jobSummary} requirements={career.requirementsSummary} applicationInstructions={career.applicationInstructions} details={career.jobDetails} />
      ))}
    </Container>
  )
}
