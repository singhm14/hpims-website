import React, { useState, useEffect } from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import queryString from 'query-string'

// Hooks
import usePath from 'hooks/usePath/'

// Utils
import { getSlug } from 'utils/functions'

// Components
import Grid from 'components/grid/'
import PublicationCard from 'components/publication-card/'

const StyledPublicationsList = styled.section`
  width: 100%;
`

const PublicationsList = () => {
  // We'll save the filters as states
  const [publications, setPublications] = useState([])
  const [postsShowing, setPostsShowing] = useState(6)
  const [yearParameter, setYearParameter] = useState(null)
  const [categoryParamater, setCategoryParameter] = useState(null)
  const [authorParameter, setAuthorParameter] = useState(null)
  const [publicationMethodParameter, setPublicationMethodParameter] = useState(null)
  const infiniteTrigger = React.createRef()

  const data = useStaticQuery(graphql`
    query {
      allContentfulPublications(sort: { fields: year, order: DESC }) {
        nodes {
          method
          journal
          title
          authors {
            authors
          }
          internalAuthors {
            ... on ContentfulTeamMembers {
              id
              name
              profilePicture {
                fixed(width: 24, quality: 100) {
                  ...GatsbyContentfulFixed_withWebp
                }
              }
            }
            ... on ContentfulStudents {
              id
              name
            }
          }
          year(formatString: "MMMM, YYYY")
          tags
          link
        }
      }
    }
  `)

  // We'll save the publications as state
  useEffect(() => {
    setPublications(data.allContentfulPublications.nodes)
  }, [data.allContentfulPublications.nodes])

  // We'll save queryStrings as state
  useEffect(() => {
    setYearParameter(queryString.parse(window.location.search).year)
    setCategoryParameter(queryString.parse(window.location.search).category)
    setAuthorParameter(queryString.parse(window.location.search).author)
    setPublicationMethodParameter(queryString.parse(window.location.search).publicationMethod)
  }, [yearParameter, categoryParamater, authorParameter, publicationMethodParameter])

  // We'll filter the data array
  // searching for publications matching the queryString
  useEffect(() => {
    if (yearParameter || categoryParamater || authorParameter || publicationMethodParameter) {
      let filteredPublications = data.allContentfulPublications.nodes

      // Year filtering
      if (yearParameter) {
        filteredPublications = filteredPublications.filter((publication) => {
          return yearParameter === publication.year.split(' ')[1]
        })
      }

      // Category Filtering
      if (categoryParamater) {
        filteredPublications = filteredPublications.filter((publication) => {
          let shouldBeIncluded = false

          const categories = publication.tags
          categories &&
            categories.map((category) => {
              if (getSlug(category) === categoryParamater) {
                shouldBeIncluded = true
              }
            })

          return shouldBeIncluded
        })
      }

      // Author filtering
      if (authorParameter) {
        filteredPublications = filteredPublications.filter((publication) => {
          let shouldBeIncluded = false

          const internalAuthors = publication.internalAuthors
          internalAuthors &&
            internalAuthors.map((author) => {
              if (authorParameter === getSlug(author.name)) {
                shouldBeIncluded = true
              }
            })

          return shouldBeIncluded
        })
      }

      // Publication Method filtering
      if (publicationMethodParameter) {
        filteredPublications = filteredPublications.filter((publication) => {
          return publicationMethodParameter === getSlug(publication.method)
        })
      }

      setPublications(filteredPublications)
    }
  }, [yearParameter, categoryParamater, authorParameter, publicationMethodParameter])

  // We'll log the observer and the loadMorePosts() function
  useEffect(() => {
    const loadMorePosts = () => {
      if (publications.length > postsShowing) {
        setPostsShowing(postsShowing + 6)
      }
    }

    const observer = new IntersectionObserver(([entry], self) => {
      if (entry.intersectionRatio > 0) {
        loadMorePosts()
        self.disconnect()
      }
    })

    observer.observe(infiniteTrigger.current)
  }, [postsShowing, infiniteTrigger, publications.length])

  return (
    <StyledPublicationsList>
      <Grid gutter="32" columns="1">
        {publications ? (
          publications.slice(0, postsShowing).map((publication) => (
            <div className="grid__item">
              <PublicationCard method={publication.method} journal={publication.journal} title={publication.title} authors={publication.authors.authors} internalAuthors={publication.internalAuthors} year={publication.year} tags={publication.tags} link={publication.link} />
            </div>
          ))
        ) : (
          <p>No publications to show</p>
        )}
      </Grid>
      <div ref={infiniteTrigger}></div>
    </StyledPublicationsList>
  )
}

export default PublicationsList
