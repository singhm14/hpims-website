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
  // Default states
  const defaultYear = typeof window !== 'undefined' ? queryString.parse(window.location.search).year : null
  const defaultCategory = typeof window !== 'undefined' ? queryString.parse(window.location.search).category : null
  const defaultAuthor = typeof window !== 'undefined' ? queryString.parse(window.location.search).author : null
  const defaultPublicationMethod = typeof window !== 'undefined' ? queryString.parse(window.location.search).publicationMethod : null

  // Store filters as state
  const [year, handleYearFilter] = useState(defaultYear)
  const [category, handleCategoryFilter] = useState(defaultCategory)
  const [author, handleAuthorFilter] = useState(defaultAuthor)
  const [publicationMethod, handlePublicationMethodFilter] = useState(defaultPublicationMethod)

  const [urlQueryString, handleQueryString] = useState('')

  // We'll build the urlQueryString
  useEffect(() => {
    let toReturn = '?'

    year && (toReturn += 'year=' + year)
    category && (toReturn === '?' ? (toReturn += 'category=' + category) : (toReturn += '&category=' + category))
    author && (toReturn === '?' ? (toReturn += 'author=' + author) : (toReturn += '&author=' + author))
    publicationMethod && (toReturn === '?' ? (toReturn += 'publicationMethod=' + publicationMethod) : (toReturn += '&publicationMethod=' + publicationMethod))

    handleQueryString(toReturn)
  }, [year, category, author, publicationMethod])

  const data = useStaticQuery(graphql`
    query {
      allContentfulPublications {
        nodes {
          year(formatString: "yyyy")
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
    publication.tags && publication.tags.map((tag) => tags.push(tag))

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
    <FiltersWrapper>
      <StyledFilters>
        <p className="filters__title paragraph--small font-weight--600">{year || category || author || publicationMethod ? 'Filtered by' : 'Filter by'}</p>
        <Dropdown label="Year" defaultOption={defaultYear} options={years} callbackFunction={(event) => handleYearFilter(getSlug(event.target.innerText))} resetFunction={() => handleYearFilter(null)} />
        <Dropdown label="Category" defaultOption={defaultCategory} options={tags} callbackFunction={(event) => handleCategoryFilter(getSlug(event.target.innerText))} resetFunction={() => handleCategoryFilter(null)} />
        <Dropdown label="Author" defaultOption={defaultAuthor} options={internalAuthors} callbackFunction={(event) => handleAuthorFilter(getSlug(event.target.innerText))} resetFunction={() => handleAuthorFilter(null)} />
        <Dropdown label="Publication Method" defaultOption={defaultPublicationMethod} options={publicationMethods} callbackFunction={(event) => handlePublicationMethodFilter(getSlug(event.target.innerText))} resetFunction={() => handlePublicationMethodFilter(null)} />

        <PrimaryExternal disabled={year === defaultYear && category === defaultCategory && author === defaultAuthor && publicationMethod === defaultPublicationMethod} className="filters__button bg-hover--blue500 color--blue500 color-hover--white border--blue500 border-hover--blue500" href={urlQueryString === '?' ? '/publications' : '/publications/' + urlQueryString} text="Apply Filter" />
      </StyledFilters>
    </FiltersWrapper>
  )
}

export default Filters
