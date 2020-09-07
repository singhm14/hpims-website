import React from 'react'

// Utils
import breakpoint from 'utils/breakpoints/'

// Libraries
import styled from 'styled-components'

// Components
import Container from 'components/container/'

// Sections
import Filters from 'sections/publications/filters'
import PublicationsList from 'sections/publications/publications-list'

const StyledPublications = styled.section`
  padding: 40px 0;

  ${breakpoint.medium`
    padding: 80px 0;
  `}

  ${Container} {
    display: flex;
    justify-content: space-between;
  }
`

const Publications = () => (
  <StyledPublications>
    <Container>
      <Filters />
      <PublicationsList />
    </Container>
  </StyledPublications>
)

export default Publications
