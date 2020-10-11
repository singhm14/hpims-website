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
  position: sticky;
  top: 104px;

  .call-to-action {
    padding: 24px 16px;
    margin-bottom: 64px;

    .title {
      margin-bottom: 16px;
    }

    a {
      width: 100%;
      display: inline-block;
      padding: 8px 16px;
      margin-top: 16px;
      border: 1px solid ${colors.grey100};
      text-align: center;
      transition: all 0.3s ease;
      box-sizing: border-box;

      &:hover {
        background-color: ${colors.grey100};
        color: ${colors.blue500};
      }
    }
  }
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
  const callToActions = props.data.contentfulResearchProjects.callToAction
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
      {callToActions &&
        callToActions.map((callToAction) => (
          <div className="call-to-action bg--blue500 color--grey100" key={callToAction.map}>
            <p className="title font-weight--600">{callToAction.title}</p>
            {callToAction.description && <p>{callToAction.description.description}</p>}
            <a href={callToAction.linkUrl} target="_blank" rel="noopener noreferrer">
              {callToAction.linkLabel}
            </a>
          </div>
        ))}
      {teamMembers && (
        <React.Fragment>
          <div className="sidebar__team">
            <p className="title--underlined">Team</p>
            {teamMembers.map((teamMember) => (
              <Link className="team" to={'/team/' + getSlug(teamMember.name)} key={teamMember.id}>
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
