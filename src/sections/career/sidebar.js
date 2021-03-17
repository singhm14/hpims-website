import React from 'react'

// Libraries
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const StyledSidebar = styled.div`
  .sidebar__content {
    padding: 24px;
  }

  .title--underlined {
    text-transform: initial;
  }

  ul,
  ol {
    padding-left: 16px;
    margin: 0.5em 0;
  }
`

const Sidebar = (props) => {
  const {
    jobSummary: { jobSummary: summary },
    applicationInstructions: instructions
  } = props.data

  return (
    <StyledSidebar>
      <div className="sidebar__content bg--blue100 color--black">
        <p className="title--underlined paragraph--small">Requirements Summary</p>
        <p className="paragraph--small">{summary}</p>
        <br />
        <p className="title--underlined paragraph--small">Apply Now</p>
        <p className="paragraph--small">{documentToReactComponents(instructions.json)}</p>
      </div>
    </StyledSidebar>
  )
}

export default Sidebar
