import React from 'react'

// Libraries
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

// Utils
import breakpoint from 'utils/breakpoints/'
import { getSlug } from 'utils/functions/'

// Components
import { Link } from 'gatsby'

const StyledTeamMemberCard = styled.div`
  width: 100%;

  .team-member__profile-picture {
    width: 100%;
    padding-bottom: 85%;
  }

  .team-member__info {
    min-height: 220px;
    display: flex;
    flex-wrap: wrap;
    padding: 24px;

    ${breakpoint.medium`
      padding: 32px;
    `}

    * {
      width: 100%;
    }

    .department {
      margin-bottom: 16px;
      font-size: 12px;
      text-transform: uppercase;
    }

    .name {
      margin-bottom: 4px;
      font-size: 18px;
      font-weight: 600;
    }

    .link {
      margin-top: 16px;
      align-self: flex-end;
      text-transform: uppercase;
    }
  }
`

const TeamMemberCard = (props) => (
  <StyledTeamMemberCard>
    <BackgroundImage className="team-member__profile-picture bg--grey900" fluid={props.profilePicture} />
    <div className="team-member__info bg--grey100 color--black">
      <p className="department">
        {props.departments.map((department) => (
          <span>{department}</span>
        ))}
      </p>

      <p className="name">{props.name}</p>
      <p>{props.position}</p>

      <Link to={'/team/' + getSlug(props.name)} className="link color--900">
        + More Info
      </Link>
    </div>
  </StyledTeamMemberCard>
)

export default TeamMemberCard
