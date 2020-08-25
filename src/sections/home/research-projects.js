import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'
import ResearchProjectCard from 'components/research-project-card/'

const StyledResearchProjects = styled.section`
  padding: 40px 0;

  ${breakpoint.medium`
    padding: 60px 0;
  `}
`

const ResearchProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulResearchProjects {
        nodes {
          icon {
            fixed(width: 88, quality: 100) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
          title
          summary {
            summary
          }
        }
      }
    }
  `)
  return (
    <StyledResearchProjects>
      <Container>
        {data.allContentfulResearchProjects.nodes.map((project) => (
          <ResearchProjectCard icon={project.icon.fixed} title={project.title} summary={project.summary.summary} />
        ))}
      </Container>
    </StyledResearchProjects>
  )
}

export default ResearchProjects
