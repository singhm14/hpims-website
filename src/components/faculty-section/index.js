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

  ${Container} {
    display: flex;
    flex-wrap: wrap;
  }

  // Layout:start
  ${(props) =>
    props.layout === 'Image on top' &&
    css`
      &:first-of-type {
        .faculty__content {
          font-size: 18px;
          line-height: 26px;
        }
      }

      .faculty__image {
        width: 100%;
        padding-bottom: 56.25%;
        margin-bottom: 40px;
      }

      .faculty__content {
        max-width: 736px;
        margin-right: auto;
        margin-left: auto;

        .title,
        .subtitle {
          text-align: center;
        }

        .title {
          font-size: 28px;
          line-height: 32px;

          ${breakpoint.medium`
            font-size: 40px;
            line-height: 48px;
          `}
        }
      }
    `}

  ${(props) =>
    props.layout !== 'Image on top' &&
    css`
      ${Container} {
        ${breakpoint.medium`
          flex-wrap: nowrap;
          align-items: center;
        `}
      }

      .faculty__image {
        width: 100%;
        padding-bottom: 100%;

        ${breakpoint.medium`
          width: 50%;
          padding-bottom: 50%;
        `}
      }

      .faculty__content {
        width: 100%;

        ${breakpoint.medium`
          max-width: 504px;
          width: 50%;
          box-sizing: content-box;

          ${(props) =>
            props.layout === 'Image on the left' || props.layout === 'Full image on the left'
              ? css`
                  margin-left: 56px;
                `
              : css`
                  margin-right: 56px;
                `}
        `}
      }
    `}

  ${(props) =>
    props.layout === 'Image on the left' &&
    css`
      .faculty__image {
        margin-bottom: 40px;
      }

      ${breakpoint.medium`
        .faculty__image {
          order: 0; 
          margin-bottom: 0;
        }

        .faculty__content {
          order:  1;
        }
      `}
    `}

  ${(props) =>
    props.layout === 'Image on the right' &&
    css`
      .faculty__image {
        margin-bottom: 40px;
      }

      ${breakpoint.medium`
        .faculty__content {
          order: 0;
        }

        .faculty__image {
          order:  1;
        }
      `}
    `}
  // Layout:end

  // Blue Gradient:start
  ${(props) =>
    props.background === 'Blue Gradient' &&
    css`
      padding: 0;
      background: ${gradients.primary};

      ${Container} {
        max-width: 100%;
        padding: 0;
      }

      .faculty__image {
        width: 100%;
        padding-bottom: 84%;

        ${breakpoint.medium`
          width: 50%;
          padding-bottom: 45%;
        `}
      }

      .faculty__content {
        max-width: 504px;
        width: 100%;
        padding: 32px 16px;
        color: ${colors.white};
        box-sizing: content-box;

        .title {
          color: ${colors.white}!important;
        }

        ${breakpoint.small`
          padding: 80px 56px;
        `}

        ${breakpoint.medium`
          width: 50%;
        `}
      }
    `}
  // Blue Gradient:end

  // Blue Light:start
  ${(props) =>
    props.background === 'Blue Light' &&
    css`
      background-color: ${colors.blue100};
    `}
  // Blue Light:end

  .faculty__content {

    .subtitle {
      margin-bottom: 16px;
      font-size: 16px;
      line-height: 24px;
    }

    .title {
      margin-bottom: 32px;
      color: ${colors.blue300};
    }

    .content__subheading {
      margin: 32px 0 8px 0;
    }

    p {
      margin-bottom: 1em;

      &:last-child {
        margin-bottom: 0;
      }
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
          {subtitle && <p className="subtitle font-weight--600">{subtitle}</p>}
          {title && <h4 className="title">{title}</h4>}

          {content && documentToReactComponents(content.json, renderOptions)}
        </div>
      </Container>
    </StyledFacultySection>
  )
}

export default FacultySection
