import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'

// Components
import Container from 'components/container/'
import PublicationCard from 'components/publication-card'

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPublications {
        nodes {
          id
          method
          journal
          title
          authors {
            authors
          }
          year
          tags
          link
        }
      }
    }
  `)
  return (
    <Container>
      {data.allContentfulPublications.nodes.map((publication) => (
        <PublicationCard key={publication.id} method={publication.method} journal={publication.journal} title={publication.title} authors={publication.authors.authors} year={publication.year} tags={publication.tags} link={publication.link} />
      ))}
    </Container>
  )
}

export default Home
