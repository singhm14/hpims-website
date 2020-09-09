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
import { Primary } from 'components/buttons/'

const StyledResearchProjects = styled.section`
  position: relative;
  padding: 48px 0 80px 0;
  text-align: center;

  ${breakpoint.medium`
    padding: 120px 0 80px 0;
  `}

  ${Container} {
    max-width: 928px;
  }

  .section__title {
    max-width: 100%;
    text-align: center;
  }

  .research__link {
    margin-top: 24px;

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
    <StyledResearchProjects>
      <Container>
        <div className="section__title">
          <p className="section__subtitle">Research</p>
          <h3 className="color--blue500">Leading the digital health revolution</h3>
        </div>

        <Grid gutter="32" columns="2">
          {data.allContentfulResearchProjects.nodes.map((project) => (
            <div className="grid__item">
              <ResearchProjectCard icon={project.icon && project.icon.fixed} title={project.title} summary={project.summary.summary} />
            </div>
          ))}
        </Grid>

        <Primary to="/research" className="research__link color--blue500 color-hover--white bg-hover--blue500 border--blue500" text="Explore all research initiatives" />
      </Container>
    </StyledResearchProjects>
  )
}

export default ResearchProjects
