import React, { useState, useEffect } from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import queryString from 'query-string'

// Utils
import breakpoint from 'utils/breakpoints/'
import { getSlug } from 'utils/functions/'

// Components
import Grid from 'components/grid/'
import TeamMemberCard from 'components/team-member-card/'
import { ExternalTertiary } from 'components/buttons/'

const StyledTeamMembers = styled.section`
  h4 {
    margin-bottom: 24px;
  }

  .team-members__nothing-found {
    width: 100%;
    padding: 24px 16px;
    box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.08);

    ${breakpoint.small`
      padding: 24px;
    `}

    ${breakpoint.medium`
      padding: 32px;
    `}

    ${breakpoint.large`
      padding: 48px;
    `}

    h5 {
      margin-bottom: 8px;
    }

    p {
      margin-bottom: 24px;
    }
  }
`

/* eslint-disable */
const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([])
  // We'll save the filters as state
  const [roleParameter, setRoleParameter] = useState(null)
  const [labParameter, setLabParameter] = useState(null)
  const [projectParameter, setProjectParameter] = useState(null)

  const data = useStaticQuery(graphql`
    query {
      allContentfulTeamMembers(sort: { fields: createdAt, order: ASC }) {
        nodes {
          profilePicture {
            fluid(maxWidth: 256, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          department
          name
          department
          labs {
            name
          }
          research_projects {
            title
          }
        }
      }
    }
  `)

  // We'll save all team members as state
  useEffect(() => {
    setTeamMembers(data.allContentfulTeamMembers.nodes)
  }, [data.allContentfulTeamMembers.nodes])

  // We'll save query strings as state
  useEffect(() => {
    setRoleParameter(queryString.parse(window.location.search).role)
    setLabParameter(queryString.parse(window.location.search).lab)
    setProjectParameter(queryString.parse(window.location.search).project)
  }, [roleParameter, labParameter, projectParameter])

  // Filtering
  useEffect(() => {
    if (roleParameter || labParameter || projectParameter) {
      let filteredTeamMembers = data.allContentfulTeamMembers.nodes

      // Role filtering
      if (roleParameter) {
        filteredTeamMembers = filteredTeamMembers.filter((teamMember) => {
          let shouldBeIncluded = false
          teamMember.department &&
            teamMember.department.map((department) => {
              if (roleParameter === getSlug(department)) {
                shouldBeIncluded = true
              }
            })
          return shouldBeIncluded
        })
      }

      // Lab filtering
      if (labParameter) {
        filteredTeamMembers = filteredTeamMembers.filter((teamMember) => {
          let shouldBeIncluded = false
          teamMember.labs &&
            teamMember.labs.map((lab) => {
              if (labParameter === getSlug(lab.name)) {
                shouldBeIncluded = true
              }
            })
          return shouldBeIncluded
        })
      }

      // Project filtering
      if (projectParameter) {
        filteredTeamMembers = filteredTeamMembers.filter((teamMember) => {
          let shouldBeIncluded = false
          teamMember.research_projects &&
            teamMember.research_projects.map((project) => {
              if (projectParameter === getSlug(project.title)) {
                shouldBeIncluded = true
              }
            })
          return shouldBeIncluded
        })
      }

      setTeamMembers(filteredTeamMembers)

      // Hides `Students section
      const studentsSection = document.getElementById('teamStudents')
      if (studentsSection) {
        studentsSection.style.display = 'none'
      }
    }
  }, [roleParameter, labParameter, projectParameter])

  return (
    <StyledTeamMembers>
      <h4 className="color--blue500 font-weight--600">Team Members</h4>
      <Grid gutter="32" columns="3">
        {teamMembers.length > 0 ? (
          teamMembers.map((member) => (
            <div className="grid__item">
              <TeamMemberCard profilePicture={member.profilePicture && member.profilePicture.fluid} departments={member.department} name={member.name} department={member.department} />
            </div>
          ))
        ) : (
          <div className="team-members__nothing-found">
            <h5 className="color--black font-weight--600">We haven’t found any publications that match your search.</h5>
            <p>Please, try changing the filters to find what you’re looking for.</p>

            <ExternalTertiary to="/team" className="color--blue300 font-weight--600" text="View all team members" />
          </div>
        )}
      </Grid>
    </StyledTeamMembers>
  )
}

export default TeamMembers
