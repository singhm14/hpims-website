import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'

// Utils
import { colors } from 'utils/variables/'
import { getSlug } from 'utils/functions/'

const StyledSidebar = styled.section`
  .sidebar__team {
    .team {
      width: 100%;
      min-height: 80px;
      display: flex;
      margin-bottom: 16px;
      background-color: ${colors.white};
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        .team__content {
          p {
            color: ${colors.blue300};
          }
        }
      }

      .team__image {
        width: 64px;
      }

      .team__content {
        width: calc(100% - 64px);
        position: relative;
        padding: 16px;

        p {
          transition: all 0.3s ease;
        }

        .content__plus {
          position: absolute;
          right: 12px;
          bottom: 12px;
          font-size: 24px;
          line-height: 14px;
        }
      }
    }
  }
`

const Sidebar = (props) => {
  const teamMembers = props.data.contentfulResearchProjects.teamMembers

  const profilePicturePlacholder = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "team/profile-picture-placeholder.png" }) {
        childImageSharp {
          fluid(maxWidth: 64, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <StyledSidebar>
      {teamMembers && (
        <React.Fragment>
          <div className="sidebar__team">
            <p className="title--underlined">Team</p>
            {teamMembers.map((teamMember) => (
              <Link className="team" to={'/team/' + getSlug(teamMember.name)}>
                <BackgroundImage
                  className="team__image"
                  fluid={teamMember.profilePicture ? teamMember.profilePicture.fluid : profilePicturePlacholder.file.childImageSharp.fluid}
                  style={{
                    backgroundSize: 'cover'
                  }}
                />
                <div className="team__content">
                  <p className="color--blue500 font-weight--600">{teamMember.name}</p>
                  <span className="content__plus color--blue300">+</span>
                </div>
              </Link>
            ))}
          </div>
        </React.Fragment>
      )}
    </StyledSidebar>
  )
}

export default Sidebar
