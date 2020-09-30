import React, { useState, useEffect } from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import queryString from 'query-string'

// Utils
import breakpoint from 'utils/breakpoints/'
import { getSlug } from 'utils/functions/'

// Components
import FiltersWrapper from 'components/filters-wrapper/'
import Dropdown from 'components/dropdown/'
import { PrimaryExternal } from 'components/buttons/'

const StyledFilters = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 32px;

  ${breakpoint.small`
    max-width: 256px;
    margin: 0;
  `}

  .filters__title {
    text-transform: uppercase;
  }

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
  // Default States
  const defaultRole = typeof window !== 'undefined' ? queryString.parse(window.location.search).role : null
  const defaultLab = typeof window !== 'undefined' ? queryString.parse(window.location.search).lab : null
  const defaultProject = typeof window !== 'undefined' ? queryString.parse(window.location.search).project : null

  // Store filters as state
  const [role, handleRoleFilter] = useState(defaultRole)
  const [lab, handleLabFilter] = useState(defaultLab)
  const [project, handleProjectFilter] = useState(defaultProject)

  // We'll build the query string here
  const [urlQueryString, handleQueryString] = useState('')

  // This function build the query string
  useEffect(() => {
    let toReturn = '?'

    role && (toReturn += 'role=' + role)
    lab && (toReturn === '?' ? (toReturn += 'lab=' + lab) : (toReturn += '&lab=' + lab))
    project && (toReturn === '?' ? (toReturn += 'project=' + project) : (toReturn += '&project=' + project))

    handleQueryString(toReturn)
  }, [role, lab, project])

  const data = useStaticQuery(graphql`
    query {
      allContentfulTeamMembers {
        nodes {
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
  data.allContentfulTeamMembers.nodes.map((teamMember) => {
    // Push all roles
    teamMember.department && teamMember.department.map((department) => roles.push(department))

    // Push all labs
    teamMember.labs && teamMember.labs.map((lab) => labs.push(lab.name))

    // Push all projects
    teamMember.research_projects && teamMember.research_projects.map((project) => projects.push(project.title))

    return false // To avoid error
  })

  roles = Array.from(new Set(roles))
  labs = Array.from(new Set(labs))
  projects = Array.from(new Set(projects))

  return (
    <FiltersWrapper>
      <StyledFilters>
        <p className="filters__title paragraph--small font-weight--600">{role || lab || project ? 'Filtered by' : 'Filter by'}</p>

        <Dropdown label="Role" defaultOption={defaultRole} options={roles} callbackFunction={(event) => handleRoleFilter(getSlug(event.target.innerText))} resetFunction={() => handleRoleFilter(null)} />

        <Dropdown label="Lab" defaultOption={defaultLab} options={labs} callbackFunction={(event) => handleLabFilter(getSlug(event.target.innerText))} resetFunction={() => handleLabFilter(null)} />

        <Dropdown label="Project" defaultOption={defaultProject} options={projects} callbackFunction={(event) => handleProjectFilter(getSlug(event.target.innerText))} resetFunction={() => handleProjectFilter(null)} />

        <PrimaryExternal disabled={role === defaultRole && lab === defaultLab && project === defaultProject} className="filters__button bg-hover--blue500 color--blue500 color-hover--white border--blue500 border-hover--blue500" href={urlQueryString === '?' ? '/team' : '/team/' + urlQueryString} text="Apply Filter" />
      </StyledFilters>
    </FiltersWrapper>
  )
}

export default Filters
