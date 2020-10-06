import React from 'react'

// Utils
import { colors } from 'utils/variables/'

// Libraries
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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
`

const Content = (props) => {
  const content = props.data.contentfulResearchProjects.description

  return <StyledContent>{content && documentToReactComponents(content.json)}</StyledContent>
}

export default Content
