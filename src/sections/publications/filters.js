import React, { useState } from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Dropdown from 'components/dropdown/'

const StyledFilters = styled.div`
  width: 100%;
  margin-bottom: 32px;

  ${breakpoint.small`
    max-width: 256px;
    margin: 0;
  `}
`

const Filters = () => {
  // Store filters as state
  const [year, handleYearFilter] = useState(null)
  const [category, handleCategoryFilter] = useState(null)
  const [author, handleAuthorFilter] = useState(null)
  const [publicationMethod, handlePublicationMethodFilter] = useState(null)

  const data = useStaticQuery(graphql`
    query {
      allContentfulPublications {
        nodes {
          year
          tags
          internalAuthors {
            ... on ContentfulTeamMembers {
              name
            }
            ... on ContentfulStudents {
              name
            }
          }
          method
        }
      }
    }
  `)

  let years = []
  let tags = []
  let internalAuthors = []
  let publicationMethods = []

  // Populates the arrays with information
  data.allContentfulPublications.nodes.map((publication) => {
    // Push all Years
    years.push(publication.year)

    // Push all Tags
    publication.tags.map((tag) => tags.push(tag))

    // Push all Authors
    publication.internalAuthors && publication.internalAuthors.map((author) => internalAuthors.push(author.name))

    // Push all Publication Methods
    publicationMethods.push(publication.method)

    return false // To avoid error
  })

  // Remove repeated options
  years = Array.from(new Set(years))
  tags = Array.from(new Set(tags))
  internalAuthors = Array.from(new Set(internalAuthors))
  publicationMethods = Array.from(new Set(publicationMethods))

  return (
    <StyledFilters>
      <Dropdown label="Year" options={years} callbackFunction={(event) => handleYearFilter(event.target.innerText)} />
      <Dropdown label="Category" options={tags} callbackFunction={(event) => handleCategoryFilter(event.target.innerText)} />
      <Dropdown label="Author" options={internalAuthors} callbackFunction={(event) => handleAuthorFilter(event.target.innerText)} />
      <Dropdown label="Publication Method" options={publicationMethods} callbackFunction={(event) => handlePublicationMethodFilter(event.target.innerText)} />

      <p>
        ?year={year}&category={category}&author={author}&publicatioMethod={publicationMethod}
      </p>
    </StyledFilters>
  )
}

export default Filters
