import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Components
import Grid from 'components/grid/'
import TeamMemberCard from 'components/team-member-card/'

const StyledTeamMembers = styled.section`
  h4 {
    margin-bottom: 24px;
  }
`

const TeamMembers = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeamMembers(sort: { fields: createdAt, order: ASC }) {
        nodes {
          profilePicture {
            fixed(width: 256, quality: 100) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
          department
          name
          position
        }
      }
    }
  `)
  return (
    <StyledTeamMembers>
      <h4 className="color--blue500 font-weight--600">Team Members</h4>
      <Grid gutter="32" columns="3">
        {data.allContentfulTeamMembers.nodes.map((member) => (
          <div className="grid__item">
            <TeamMemberCard profilePicture={member.profilePicture && member.profilePicture.fixed} departments={member.department} name={member.name} position={member.position} />
          </div>
        ))}
      </Grid>
    </StyledTeamMembers>
  )
}

export default TeamMembers
