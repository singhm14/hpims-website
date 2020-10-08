import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Triangle from 'components/background-triangle/'
import Container from 'components/container/'
import Grid from 'components/grid/'
import ResearchProjectCard from 'components/research-project-card/'

const StyledCoreProjects = styled.section`
  position: relative;
  padding-top: 40px;
  padding-bottom: 64px;

  ${breakpoint.medium`
    padding-top: 0;
    padding-bottom: 120px;
  `}

  h2 {
    max-width: 620px;
    margin-bottom: 24px;

    ${breakpoint.small`
      margin-bottom: 32px;
    `}

    ${breakpoint.medium`
      margin-bottom: 48px;
    `}
  }
`

const CoreProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulResearchProjects(sort: { fields: createdAt, order: ASC }, limit: 3) {
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

      studentsProjectsIcon: file(relativePath: { eq: "research/icon-co-innovation-research.png" }) {
        childImageSharp {
          fixed(width: 52, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <StyledCoreProjects className="bg--blue100">
      <Triangle />
      <Container>
        <h2 className="color--blue500 font-weight--600">Core Research Projects</h2>
        <Grid gutter="32" columns="3">
          {data.allContentfulResearchProjects.nodes.map((project, index) => (
            <div className="grid__item" key={index}>
              <ResearchProjectCard icon={project.icon && project.icon.fixed} title={project.title} summary={project.summary.summary} />
            </div>
          ))}
          <div className="grid__item">
            <ResearchProjectCard icon={data.studentsProjectsIcon.childImageSharp.fixed} title="Co-Innovation Research Exchange" summary="The HPI･MS research exchange is a co-mentorship program supported by research faculty at the Hasso Plattner Institute and the Icahn School of Medicine at Mount Sinai, wherein trainees lead innovative projects that leverage the unique clinical data resources of Mount Sinai with the applied digital engineering training of HPI in order to improve clinical computational understanding." />
          </div>
        </Grid>
      </Container>
    </StyledCoreProjects>
  )
}

export default CoreProjects
