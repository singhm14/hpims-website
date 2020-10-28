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

// Icons
import StudentsProjectsIcon from 'assets/icons/icon-students-projects.inline.svg'

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

      .sticky {
        ${breakpoint.medium`
          position: sticky;
          top: 104px;
        `}
      }

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
  const studentsProjects = data.co_innovation_projects

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
            <div className="sticky">
              {labs && (
                <div className="reference">
                  <p className="title--underlined">Labs</p>
                  <Grid gutter="16" columns="1">
                    {labs.map((lab, index) => (
                      <div className="grid__item" key={index}>
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
                            <h5 className="card__title color--blue500 font-weight--600">{lab.title}</h5>
                            <Tertiary className="color--blue300 font-weight--600" to={'/labs/' + getSlug(lab.title)} text="View Lab" />
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
                          {project.icon ? (
                            <Img
                              className="card__icon"
                              fixed={project.icon.fixed}
                              styles={{
                                width: '56px',
                                height: '56px'
                              }}
                            />
                          ) : (
                            <div className="card__icon"></div>
                          )}
                          <div className="card__content">
                            <p className="card__title color--blue500 font-weight--600">{project.title}</p>
                            <Tertiary className="color--blue300 font-weight--600" to={'/research-projects/' + getSlug(project.title)} text="View full project" />
                          </div>
                        </ReferenceCard>
                      </div>
                    ))}

                    {studentsProjects && (
                      <div className="grid__item">
                        <ReferenceCard>
                          <StudentsProjectsIcon className="card__icon" />
                          <div className="card__content">
                            <p className="card__title color--blue500 font-weight--600">Co-Innovation Research Exchange</p>
                            <Tertiary className="color--blue300 font-weight--600" to="/research-projects/co-innovation-research-exchange" text="View full project" />
                          </div>
                        </ReferenceCard>
                      </div>
                    )}
                  </Grid>
                </div>
              )}
            </div>
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
