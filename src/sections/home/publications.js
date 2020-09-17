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

// Icons
import Background from 'assets/icons/home/publications-background.svg'

const StyledPublications = styled.section`
  position: relative;
  padding: 60px 0 30vw 0;

  ${breakpoint.medium`
    padding: 120px 0 15vw 0;
  `}

  .publications__background {
    max-width: 100vw;
    width: auto;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    background-image: url(${Background});
    background-size: cover;
    z-index: 1;
  }

  ${Container} {
    max-width: 928px;
    position: relative;
    z-index: 10;
  }

  .section__title {
    ${breakpoint.medium`
      max-width: 455px;
    `}
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
      allContentfulPublications(limit: 4, sort: { fields: year, order: DESC }) {
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
    <StyledPublications className="bg--grey100">
      <div className="publications__background" />

      <Container>
        <p className="section__subtitle color--black">Publications</p>
        <h3 className="section__title color--blue500">World class research with a global impact</h3>

        <Grid gutter="32" columns="1">
          {data.allContentfulPublications.nodes.map((publication) => (
            <div className="grid__item">
              <PublicationCard method={publication.method} journal={publication.journal} title={publication.title} authors={publication.authors.authors} internalAuthors={publication.internalAuthors} year={publication.year} tags={publication.tags} link={publication.link} />
            </div>
          ))}
        </Grid>

        <div className="publications__view-more">
          <Primary to="/publications" className="color--blue500 color-hover--white bg-hover--blue500 border--blue500" text="See all publications" />
        </div>
      </Container>
    </StyledPublications>
  )
}

export default Publications
