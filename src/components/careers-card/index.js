import React from 'react'

// Libraries
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// Utils
import breakpoint from 'utils/breakpoints/'
import { colors } from 'utils/variables/'

// Components
import Grid from 'components/grid/'
import Accordion from 'components/accordion/'

const StyledCareersCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;

  ${breakpoint.medium`
    flex-wrap: nowrap;
    padding: 32px;
  `}

  .careers__title {
    width: 100%;
    padding-bottom: 16px;
    border-bottom: 1px solid ${colors.grey500};

    ${breakpoint.medium`
      width: 202px;
      border-right: 1px solid ${colors.grey500};
      border-bottom: 0;
    `}
  }

  ul,
  ol {
    list-style-position: inside;

    p {
      display: inline;
    }
  }

  .careers__content {
    padding-top: 16px;

    ${breakpoint.medium`
      width: calc(100% - 266px);
      padding-top: 0;
      padding-left: 32px;
    `}

    .careers__requirements {
      margin: 40px 0;
    }

    h4 {
      padding-bottom: 8px;
      margin-top: 40px;
      margin-bottom: 8px;
      color: ${colors.grey900};
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      border-bottom: 1px solid ${colors.grey500};

      &:first-child {
        margin-top: 0;
      }
    }
  }
`

const CareersCard = (props) => (
  <StyledCareersCard className="bg--grey100">
    <div className="careers__title">
      <p className="paragraph--large">Post-doc</p>
      <h4>{props.title}</h4>
    </div>

    <div className="careers__content">
      <p className="summary">{props.summary}</p>
      <Grid className="careers__requirements" gutter="32" columns="2">
        <div className="grid__item">
          <h4>Requirements Summary</h4>
          {props.requirements && documentToReactComponents(props.requirements.json)}
        </div>

        <div className="grid__item">
          <h4>Apply Now</h4>
          {props.applicationInstructions && documentToReactComponents(props.applicationInstructions.json)}
        </div>
      </Grid>

      {props.details && <Accordion content={documentToReactComponents(props.details.json)} />}
    </div>
  </StyledCareersCard>
)

CareersCard.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  requirements: PropTypes.object,
  applicationInstructions: PropTypes.object
}

export default CareersCard
