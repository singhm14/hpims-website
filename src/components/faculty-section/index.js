import React from 'react'

// Libraries
import styled, { css } from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import BackgroundImage from 'gatsby-background-image'

// Utils
import { colors, gradients } from 'utils/variables/'
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'

const StyledFacultySection = styled.section`
  padding: 80px 0;

  ${(props) =>
    props.background === 'Blue Gradient' &&
    css`
      padding: 0;
      background: ${gradients.primary};

      ${Container} {
        max-width: 100%;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
      }

      .faculty__image {
        width: 100%;
        padding-bottom: 84%;

        ${breakpoint.medium`
          width: 50%;
          padding-bottom: 42%;
        `}
      }

      .faculty__content {
        max-width: 504px;
        width: 100%;
        padding: 32px 16px;
        color: ${colors.white};
        box-sizing: content-box;

        ${breakpoint.small`
          padding: 80px 56px;
        `}

        ${breakpoint.medium`
          width: 50%;
        `}
      }
    `}

  .faculty__content {
    .content__subheading {
      margin: 32px 0 8px 0;
    }

    a {
      text-decoration: underline;
    }
  }
`

const FacultySection = (props) => {
  const { layoutArrangement, backgroundStyle, image, title, subtitle, content } = props.data

  const renderOptions = {
    renderNode: {
      [BLOCKS.HEADING_4]: (node, children) => <p className="content__subheading paragraph--large font-weight--600">{children}</p>
    }
  }

  return (
    <StyledFacultySection layout={layoutArrangement} background={backgroundStyle}>
      <Container>
        {image && <BackgroundImage fluid={image.fluid} className="faculty__image" />}
        <div className="faculty__content">
          {subtitle && <p>{subtitle}</p>}
          {title && <h4 className="title">{title}</h4>}

          {content && documentToReactComponents(content.json, renderOptions)}
        </div>
      </Container>
    </StyledFacultySection>
  )
}

export default FacultySection
