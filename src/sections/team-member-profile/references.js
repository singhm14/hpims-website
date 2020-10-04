import React from 'react'

// Libraries
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

const StyledReferences = styled.section`
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
  const profilePicture = data.profilePicture.fluid
  const labs = data.labs
  const projects = data.research_projects

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
                          fluid={profilePicture}
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
                        <div className="card_-content">
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
        </div>
      </Container>
    </StyledReferences>
  )
}

export default References
