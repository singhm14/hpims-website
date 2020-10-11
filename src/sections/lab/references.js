import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

// Utils
import breakpoint from 'utils/breakpoints/'
import { colors } from 'utils/variables/'
import { getSlug } from 'utils/functions/'

// Components
import Container from 'components/container/'
import Grid from 'components/grid/'
import ReferenceCard from 'components/reference-card/'
import { Tertiary } from 'components/buttons/'
import PublicationCard from 'components/publication-card-simplified/'

// Hooks
import useContentfulImage from 'hooks/useContentfulImage/'


// Icons
import StudentsProjectsIcon from 'assets/icons/icon-students-projects.inline.svg'

const StyledReferences = styled.section`
  padding-bottom: 56px;

  ${breakpoint.medium`
    padding-bottom: 102px;
  `}

  ${Container} {
    max-width: 928px;
  }

  .references {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .sidebar {
      width: 100%;
      margin-bottom: 64px;

      ${breakpoint.medium`
        width: 352px;
      `}

      .sticky {
        ${breakpoint.medium`
          position: sticky;
          top: 104px;
        `}
      }

      .reference {
        margin-bottom: 32px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .content {
      width: 100%;

      ${breakpoint.medium`
        width: calc(100% - 352px - 32px);
      `}

      h3 {
        font-size: 16px;
        line-height: 22px;
        padding-bottom: 8px;
        margin-top: 40px;
        margin-bottom: 16px;
        font-weight: 600;
        text-transform: uppercase;
        border-bottom: 1px solid ${colors.grey500};

        &:first-child {
          margin-top: 0;
        }
      }

      ul {
        margin: 1em 0;
        padding-left: 20px;

        li {
          margin-bottom: 1em;

          &:last-child {
            margin: 0;
          }
        }
      }

      .content__image {
        margin: 40px 0;
      }

      .video-wrapper {
        width: 100%;
        position: relative;
        padding-bottom: 56.25%;
        margin: 40px 0;

        iframe {
          width: 100%;
          height: 100%;
          position: absolute;
        }
      }
    }
  }
`

// Render options for images
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const fluid = useContentfulImage(node.data.target.fields.file['en-US'].url)
      return <Img className="content__image" fluid={fluid} title="HPI·MS" />
    },
    [INLINES.HYPERLINK]: (node) => {
      if (node.data.uri.indexOf('youtube.com') || node.data.uri.indexOf('vimeo.com')) {
        return (
          <div className="video-wrapper">
            <iframe title="HPI·MS" src={node.data.uri} frameBorder="0" allowFullScreen></iframe>
          </div>
        )
      }
    }
  }
}

const References = props => {
  const content = props.data.contentfulLabs.description

  return (
    <StyledReferences>
      <Container>
        <div className="references">
          <div className="content">
            {content && documentToReactComponents(content.json, options)}
          </div>
        </div>

        <div className="sidebar">
          
        </div>
      </Container>
    </StyledReferences>
  )
}

export default References