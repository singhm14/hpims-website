import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

// Utils
import { colors } from 'utils/variables/'
import { getSlug } from 'utils/functions/'

// Components
import { Link } from 'gatsby'

const StyledTeamMemberCard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.08);

  .team-member__profile-picture {
    width: 100%;
    height: 282px !important;
    display: flex;
  }

  .team-member__info {
    min-height: 126px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 16px;
    background-color: ${colors.white};

    * {
      width: 100%;
    }

    .department {
      margin-bottom: 4px;
      font-size: 14px;
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
      text-align: right;
      text-transform: uppercase;
    }
  }
`

const TeamMemberCard = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "team/profile-picture-placeholder.png" }) {
        childImageSharp {
          fixed(width: 256, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <StyledTeamMemberCard>
      <BackgroundImage className="team-member__profile-picture bg--grey900" fixed={props.profilePicture ? props.profilePicture : data.file.childImageSharp.fixed} style={{ backgroundSize: 'cover' }} />
      <div className="team-member__info bg--grey100 color--black">
        <div>
          <p className="department paragraph--small color--grey900 font-weight--500">
            {props.departments &&
              props.departments.map((department) => {
                return department
              })}
          </p>

          <p className="name paragraph--large color--blue500">
            <Link to={'/team/' + getSlug(props.name)} className="name color--blue500 font-weight--600">
              {props.name}
            </Link>
          </p>
        </div>

        <Link to={'/team/' + getSlug(props.name)} className="link color--blue500">
          +
        </Link>
      </div>
    </StyledTeamMemberCard>
  )
}

export default TeamMemberCard
