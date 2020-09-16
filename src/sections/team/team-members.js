import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'
import Grid from 'components/grid/'
import TeamMemberCard from 'components/team-member-card/'

const StyledTeamMembers = styled.section`
  padding: 60px 0;

  ${breakpoint.medium`
    paddinh: 120px 0;
  `}
`

const TeamMembers = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeamMembers {
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
      <Container>
        <Grid gutter="32" columns="4">
          {data.allContentfulTeamMembers.nodes.map((member) => (
            <div className="grid__item">
              <TeamMemberCard profilePicture={member.profilePicture && member.profilePicture.fixed} departments={member.department} name={member.name} position={member.position} />
            </div>
          ))}
        </Grid>
      </Container>
    </StyledTeamMembers>
  )
}

export default TeamMembers
