import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Grid from 'components/grid/'
import PublicationCard from 'components/publication-card/'

const StyledPublicationsList = styled.section`
  width: 100%;

  ${breakpoint.small`
    max-width: 800px;
    width: calc(100% - 256px - 32px);
  `}

  ${breakpoint.medium`
    width: calc(100% - 256px - 24px);
  `}

  ${breakpoint.large`
    width: calc(100% - 256px - 64px);
  `}
`

const PublicationsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPublications {
        nodes {
          method
          journal
          title
          authors {
            authors
          }
          internalAuthors {
            ... on ContentfulTeamMembers {
              id
              name
              profilePicture {
                fixed(width: 24, quality: 100) {
                  ...GatsbyContentfulFixed_withWebp
                }
              }
            }
            ... on ContentfulStudents {
              id
              name
            }
          }
          tags
          link
        }
      }
    }
  `)

  return (
    <StyledPublicationsList>
      <Grid gutter="32" columns="1">
        {data.allContentfulPublications.nodes.map((publication) => (
          <div className="grid__item">
            <PublicationCard method={publication.method} journal={publication.journal} title={publication.title} authors={publication.authors.authors} internalAuthors={publication.internalAuthors} year={publication.year} tags={publication.tags} link={publication.link} />
          </div>
        ))}
      </Grid>
    </StyledPublicationsList>
  )
}

export default PublicationsList
