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
import { Primary } from 'components/buttons/'

const StyledPublications = styled.section`
  padding: 60px 0 30vw 0;

  ${breakpoint.medium`
    padding: 120px 0 15vw 0;
  `}

  ${Container} {
    max-width: 928px;
  }

  .publications__view-more {
    margin-top: 80px;
    text-align: center;

    svg {
      display: none;
    }
  }
`

const Publications = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPublications(limit: 4) {
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
          year
          tags
          link
        }
      }
    }
  `)
  return (
    <StyledPublications className="bg--grey100">
      <Container>
        <p className="section__subtitle color--black">Publications</p>
        <h2 className="section__title color--blue900">World class research with a global impact</h2>

        <Grid gutter="32" columns="1">
          {data.allContentfulPublications.nodes.map((publication) => (
            <div className="grid__item">
              <PublicationCard method={publication.method} journal={publication.journal} title={publication.title} authors={publication.authors.authors} internalAuthors={publication.internalAuthors} year={publication.year} tags={publication.tags} link={publication.link} />
            </div>
          ))}
        </Grid>

        <div className="publications__view-more">
          <Primary to="/research" className="color--blue500 color-hover--white bg-hover--blue500 border--blue500" text="Explore all research initiatives" />
        </div>
      </Container>
    </StyledPublications>
  )
}

export default Publications
