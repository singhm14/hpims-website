import React from 'react'

// Libraries
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
      height: 80px;
      display: flex;
      margin-bottom: 16px;
      background-color: ${colors.white};
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);

      &:last-child {
        margin-bottom: 0;
      }

      .team__image {
        width: 25%;
      }

      .team__content {
        position: relative;
      }
    }
  }
`

const Sidebar = (props) => {
  const teamMembers = props.data.contentfulResearchProjects.teamMembers
  return (
    <StyledSidebar>
      {teamMembers && (
        <React.Fragment>
          <div className="sidebar__team">
            <p className="title--underlined">Team</p>
            {teamMembers.map((teamMember) => (
              <div className="team">
                {teamMember.profilePicture && (
                  <BackgroundImage
                    className="team__image"
                    fluid={teamMember.profilePicture.fluid}
                    style={{
                      backgroundSize: 'cover'
                    }}
                  />
                )}
                <div className="team__content">
                  <Link to={'/team/' + getSlug(teamMember.name)}>{teamMember.name}</Link>
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </StyledSidebar>
  )
}

export default Sidebar
