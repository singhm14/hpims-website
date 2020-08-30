import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'
import Grid from 'components/grid/'
import ResearchProjectCard from 'components/research-project-card/'

// Icons
import Background from 'assets/icons/home/research-projects-background.inline.svg'

const StyledResearchProjects = styled.section`
  position: relative;
  padding: 48px 0 80px 0;

  ${breakpoint.medium`
    padding: 94px 0 160px 0;
  `}

  .research-projects__background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  ${Container} {
    max-width: 928px;
  }
`

const ResearchProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulResearchProjects(sort: { fields: createdAt, order: ASC }, limit: 2) {
        nodes {
          icon {
            fixed(width: 52, quality: 100) {
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
      <Background className="research-projects__background" />

      <Container>
        <p className="section__subtitle">Research</p>
        <h2 className="section__title color--blue500">Explore our ongoing research projects</h2>

        <Grid gutter="32" columns="2">
          {data.allContentfulResearchProjects.nodes.map((project) => (
            <div className="grid__item">
              <ResearchProjectCard icon={project.icon && project.icon.fixed} title={project.title} summary={project.summary.summary} />
            </div>
          ))}
        </Grid>
      </Container>
    </StyledResearchProjects>
  )
}

export default ResearchProjects
