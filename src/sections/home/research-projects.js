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

const StyledResearchProjects = styled.section`
  position: relative;
  padding: 48px 0 80px 0;
  text-align: center;

  ${breakpoint.medium`
    padding: 120px 0 80px 0;
  `}

  ${Container} {
    max-width: 716px;

    ${breakpoint.small`
      padding: 0;
    `}

    ${breakpoint.medium`
      max-width: 928px;
    `}
  }

  .section__title {
    max-width: 100%;
    text-align: center;
  }

  .grid__item {
    ${breakpoint.small`
      width: calc((100% - 16px) / 2);
    `}
  }

  .research__link {
    margin-top: 40px;

    ${breakpoint.medium`
      margin-top: 56px;
    `}

    svg {
      display: none;
    }
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
    <StyledResearchProjects id="research">
      <Container>
        <div className="section__title">
          <p className="section__subtitle">Research</p>
          <h3 className="color--blue500">Leading the digital health revolution</h3>
        </div>

        <Grid gutter="32" columns="2">
          {data.allContentfulResearchProjects.nodes.map((project, index) => (
            <div className="grid__item" key={index}>
              <ResearchProjectCard icon={project.icon && project.icon.fixed} title={project.title} summary={project.summary.summary} />
            </div>
          ))}
        </Grid>
      </Container>
    </StyledResearchProjects>
  )
}

export default ResearchProjects
