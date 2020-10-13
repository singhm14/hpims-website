import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'
import Grid from 'components/grid/'
import StudentProjectCard from 'components/student-project-card/'

const StyledProjects = styled.section`
  padding: 64px 0;

  ${breakpoint.medium`
    padding: 80px 0;
  `}

  ${Container} {
    max-width: 928px;
  }
`

const Projects = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulStudentsProjects {
        nodes {
          id
          status
          title
          description {
            json
          }
          supervisors {
            ... on ContentfulTeamMembers {
              id
              __typename
              name
              profilePicture {
                fixed(width: 24, quality: 100) {
                  ...GatsbyContentfulFixed_withWebp
                }
              }
            }
            ... on ContentfulStudents {
              id
              __typename
              name
            }
          }
        }
      }
    }
  `)
  return (
    <StyledProjects>
      <Container>
        <Grid gutter="40" columns="1">
          {data.allContentfulStudentsProjects.nodes.map((project, index) => (
            <div className="grid__item" key={project.id}>
              <StudentProjectCard status={project.status} title={project.title} description={project.description} supervisors={project.supervisors}/>
            </div>
          ))}
        </Grid>
      </Container>
    </StyledProjects>
  )
}

export default Projects
