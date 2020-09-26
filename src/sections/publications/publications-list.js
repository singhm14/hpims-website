import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Components
import Grid from 'components/grid/'
import PublicationCard from 'components/publication-card/'

const StyledPublicationsList = styled.section`
  width: 100%;
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
          year(formatString: "MMMM, YYYY")
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
