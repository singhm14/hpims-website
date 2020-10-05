import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

// Utils
import breakpoint from 'utils/breakpoints/'
import { getSlug } from 'utils/functions/'

// Components
import Container from 'components/container/'
import Grid from 'components/grid/'
import ReferenceCard from 'components/reference-card/'
import { Tertiary } from 'components/buttons/'
import PublicationCard from 'components/publication-card-simplified/'

const StyledReferences = styled.section`
  padding-bottom: 56px;

  ${breakpoint.medium`
    padding-bottom: 102px;
  `}

  ${Container} {
    max-width: 928px;
  }

  .references {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .sidebar {
      width: 100%;
      margin-bottom: 64px;

      ${breakpoint.medium`
        width: 352px;
      `}

      .reference {
        margin-bottom: 32px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .content {
      width: 100%;

      ${breakpoint.medium`
        width: calc(100% - 352px - 32px);
      `}
    }
  }
`

const References = (props) => {
  const data = props.data.contentfulTeamMembers
  const labs = data.labs
  const projects = data.research_projects
  const publications = data.publications

  const placeholderProfilePicture = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "team/profile-picture-placeholder.png" }) {
        childImageSharp {
          fluid(maxWidth: 352, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <StyledReferences>
      <Container>
        <div className="references">
          <div className="sidebar">
            {labs && (
              <div className="reference">
                <p className="title--underlined">Labs</p>
                <Grid gutter="16" columns="1">
                  {labs.map((lab) => (
                    <div className="grid__item">
                      <ReferenceCard>
                        <BackgroundImage
                          className="card__icon"
                          fixed={lab.headOfTheLab.profilePicture ? lab.headOfTheLab.profilePicture.fixed : placeholderProfilePicture.file.childImageSharp.fluid}
                          style={{
                            width: '64px',
                            height: '64px',
                            backgroundSize: 'cover',
                            borderRadius: '50%',
                            overflow: 'hidden'
                          }}
                        />
                        <div className="card__content">
                          <h5 className="card__title color--blue500 font-weight--600">{lab.name}</h5>
                          <Tertiary className="color--blue300 font-weight--600" to={'/labs/' + getSlug(lab.name)} text="View Lab" />
                        </div>
                      </ReferenceCard>
                    </div>
                  ))}
                </Grid>
              </div>
            )}

            {projects && (
              <div className="reference">
                <p className="title--underlined">Projects</p>
                <Grid gutter="16" columns="1">
                  {projects.map((project) => (
                    <div className="grid__item">
                      <ReferenceCard>
                        <Img
                          className="card__icon"
                          fixed={project.icon.fixed}
                          styles={{
                            width: '56px',
                            height: '56px'
                          }}
                        />
                        <div className="card__content">
                          <p className="card__title color--blue500 font-weight--600">{project.title}</p>
                          <Tertiary className="color--blue300 font-weight--600" to={'/projects/' + getSlug(project.title)} text="View Project" />
                        </div>
                      </ReferenceCard>
                    </div>
                  ))}
                </Grid>
              </div>
            )}
          </div>

          <div className="content">
            {publications && (
              <React.Fragment>
                <p className="title--underlined">Publications</p>
                <Grid gutter="16" columns="1">
                  {publications.map((publication) => (
                    <div className="grid__item">
                      <PublicationCard method={publication.method} journal={publication.journal} title={publication.title} authors={publication.authors.authors} internalAuthors={publication.internalAuthors} year={publication.year} tags={publication.tags} link={publication.link} />
                    </div>
                  ))}
                </Grid>
              </React.Fragment>
            )}
          </div>
        </div>
      </Container>
    </StyledReferences>
  )
}

export default References
