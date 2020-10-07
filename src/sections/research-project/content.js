import React from 'react'

// Libraries
import styled from 'styled-components'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'

// Utils
import { colors } from 'utils/variables/'

// Hooks
import useContentfulImage from 'hooks/useContentfulImage/'

const StyledContent = styled.section`
  display: block;
  color: ${colors.black};

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

const Content = (props) => {
  const content = props.data.contentfulResearchProjects.description

  return <StyledContent>{content && documentToReactComponents(content.json, options)}</StyledContent>
}

export default Content
