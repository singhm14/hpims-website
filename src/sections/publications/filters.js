import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Dropdown from 'components/dropdown/'

const StyledFilters = styled.div`
  width: 100%;

  ${breakpoint.small`
    max-width: 256px;
  `}
`

const Filters = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPublications {
        nodes {
          year
          tags
          internalAuthors {
            name
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
  })

  // Remove repeated options
  years = Array.from(new Set(years))
  tags = Array.from(new Set(tags))
  internalAuthors = Array.from(new Set(internalAuthors))
  publicationMethods = Array.from(new Set(publicationMethods))

  return (
    <StyledFilters>
      <Dropdown label="Year" options={years} />
      <Dropdown label="Category" options={tags} />
      <Dropdown label="Author" options={internalAuthors} />
      <Dropdown label="Publication Method" options={publicationMethods} />
    </StyledFilters>
  )
}

export default Filters
