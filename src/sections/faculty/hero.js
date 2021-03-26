import React from 'react'

// Libraries
import styled from 'styled-components'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'

const StyledHero = styled.section`
  padding-top: 120px;

  ${breakpoint.medium`
    padding-top: 200px;
  `}

  ${Container} {
    max-width: 928px;
  }

  .hero__content {
    max-width: 640px;

    p {
      margin-bottom: 1em;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .hero__title {
    margin: 16px 0 32px 0;
  }
`

const Hero = (props) => {
  const { title, pageDescription } = props.data

  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="paragraph--large">{children}</p>
    }
  }

  return (
    <StyledHero>
      <Container>
        <div className="hero__content">
          <p className="hero__subtitle color--blue500 font-weight--600">FACULTY</p>
          <h2 className="hero__title color--blue300">{title}</h2>
          {pageDescription && documentToReactComponents(pageDescription.json, renderOptions)}
        </div>
      </Container>
    </StyledHero>
  )
}

export default Hero
