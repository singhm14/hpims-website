import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'
import Grid from 'components/grid/'
import PublicationCard from 'components/publication-card/'
import ButtonLink from 'components/button-link/'

const StyledPublications = styled.section`
  padding: 60px 0;

  ${breakpoint.medium`
    padding: 120px 0;
  `}

  ${Container} {
    max-width: 928px;
  }

  .publications__view-more {
    margin-top: 80px;
    text-align: center;
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
            profilePicture {
              fixed(width: 24, quality: 100) {
                ...GatsbyContentfulFixed_withWebp
              }
            }
          }
          year
          tags
          link
        }
      }
    }
  `)
  return (
    <StyledPublications className="bg--blue500">
      <Container>
        <p className="section__subtitle color--white">Publications</p>
        <h2 className="section__title color--white">Explore our publications</h2>

        <Grid gutter="32" columns="1">
          <div className="grid__item">
            {data.allContentfulPublications.nodes.map((publication) => (
              <PublicationCard method={publication.method} journal={publication.journal} title={publication.title} authors={publication.authors.authors} internalAuthors={publication.internalAuthors} year={publication.year} tags={publication.tags} link={publication.link} />
            ))}
          </div>
        </Grid>

        <div className="publications__view-more">
          <ButtonLink to="/publications" className="bg--blue300 color--white">
            See all publications
          </ButtonLink>
        </div>
      </Container>
    </StyledPublications>
  )
}

export default Publications
