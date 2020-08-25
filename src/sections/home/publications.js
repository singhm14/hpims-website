import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Components
import Container from 'components/container/'
import PublicationCard from 'components/publication-card/'

const StyledPublications = styled.section`
  padding: 80px 0;

  ${Container} {
    max-width: 928px;
  }
`

const Publications = () => {
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
            id
            name
          }
          year
          tags
          link
        }
      }
    }
  `)
  return (
    <StyledPublications>
      <Container>
        {data.allContentfulPublications.nodes.map((publication) => (
          <PublicationCard method={publication.method} journal={publication.journal} title={publication.title} authors={publication.authors.authors} internalAuthors={publication.internalAuthors} year={publication.year} tags={publication.tags} link={publication.link} />
        ))}
      </Container>
    </StyledPublications>
  )
}

export default Publications
