import React, { useState, useEffect } from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import queryString from 'query-string'

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
  const [posts, setPosts] = useState([])
  const [postsShowing, setPostsShowing] = useState(6)
  const [yearParameter, setYearParameter] = useState(null)
  const [categoryParamater, setCategoryParameter] = useState(null)
  const [authorParameter, setAuthorParameter] = useState(null)
  const [publicationMethodParameter, setPublicationMethodParameter] = useState(null)
  const infiniteTrigger = React.createRef()

  const data = useStaticQuery(graphql`
    query {
      allContentfulPublications {
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

  // We'll save the posts as state
  useEffect(() => {
    setPosts(data.allContentfulPublications.nodes)
  }, [data.allContentfulPublications.nodes])

  // We'll save queryStrings as state
  useEffect(() => {
    setYearParameter(queryString.parse(window.location.search).year)
    setCategoryParameter(queryString.parse(window.location.search).category)
    setAuthorParameter(queryString.parse(window.location.search).author)
    setPublicationMethodParameter(queryString.parse(window.location.search).publicationMethod)

    // We'll filter the data array
    // searching for posts matching the queryString
    if (yearParameter || categoryParamater || authorParameter || publicationMethodParameter) {
      let filteredPosts = posts.filter((publication) => {
        let shouldBeIncluded = false
        if (publication.year.split(' ')[1] === yearParameter) {
          shouldBeIncluded = true
        }

        return shouldBeIncluded
      })

      setPosts(filteredPosts)
    }
  }, [yearParameter, categoryParamater, authorParameter, publicationMethodParameter])

  // We'll log the observer and the loadMorePosts() function
  useEffect(() => {
    console.log('Showing ' + postsShowing + ' posts...')
    const loadMorePosts = () => {
      if (posts.length > postsShowing) {
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
  }, [postsShowing, infiniteTrigger, posts.length])

  return (
    <StyledPublicationsList>
      <Grid gutter="32" columns="1">
        {posts ? (
          posts.slice(0, postsShowing).map((publication) => (
            <div className="grid__item">
              <PublicationCard method={publication.method} journal={publication.journal} title={publication.title} authors={publication.authors.authors} internalAuthors={publication.internalAuthors} year={publication.year} tags={publication.tags} link={publication.link} />
            </div>
          ))
        ) : (
          <p>No posts to show</p>
        )}
      </Grid>
      <div ref={infiniteTrigger}></div>
    </StyledPublicationsList>
  )
}

export default PublicationsList
