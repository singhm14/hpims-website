import React, { useState, useEffect } from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'
import { getSlug } from 'utils/functions/'

// Components
import Dropdown from 'components/dropdown/'
import { Primary } from 'components/buttons/'

const StyledFilters = styled.div`
  width: 100%;
  margin-bottom: 32px;

  ${breakpoint.small`
    max-width: 256px;
    margin: 0;
  `}

  .filters__button {
    width: 100%;
    justify-content: center;
    margin-top: 40px;

    svg {
      display: none;
    }
  }
`

const Filters = () => {
  // Store filters as state
  const [role, handleRoleFilter] = useState('')
  const [lab, handleLabFilter] = useState('')
  const [project, handleProjectFilter] = useState('')
  const [queryString, handleQueryString] = useState('')

  // Build the URL string
  useEffect(() => {
    handleQueryString(`?role=${getSlug(role)}&lab=${getSlug(lab)}&project=${getSlug(project)}`)
  }, [role, lab, project])

  const data = useStaticQuery(graphql`
    query {
      allContentfulTeamMembers {
        nodes {
          id
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

  let roles = []
  let labs = []
  let projects = []

  // Populates the arrays with information
  data.allContentfulTeamMembers.nodes.map((member) => {
    // Push all roles
    member.department && member.department.map((department) => roles.push(department))

    // Push all labs
    member.labs && member.labs.map((lab) => labs.push(lab.name))

    // Push all projects
    member.research_projects && member.research_projects.map((project) => projects.push(project.title))

    return false // To avoid error
  })

  // Remove repeated options
  roles = Array.from(new Set(roles))
  labs = Array.from(new Set(labs))
  projects = Array.from(new Set(projects))

  return (
    <StyledFilters>
      <Dropdown label="Role" options={roles} callbackFunction={(event) => handleRoleFilter(event.target.innerText)} />
      <Dropdown label="Lab" options={labs} callbackFunction={(event) => handleLabFilter(event.target.innerText)} />
      <Dropdown label="Project" options={projects} callbackFunction={(event) => handleProjectFilter(event.target.innerText)} />

      <Primary className="filters__button bg-hover--blue300 color--blue500 color-hover--white border--blue500 border-hover--blue300" to={queryString} text="Filter Publications" />
    </StyledFilters>
  )
}

export default Filters
