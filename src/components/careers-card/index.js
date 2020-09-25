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
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));

  ${breakpoint.medium`
    flex-wrap: nowrap;
  `}

  .careers__title {
    width: 100%;
    padding: 16px;

    ${breakpoint.medium`
      width: 256px;
      padding: 32px 24px;
    `}

    p {
      text-transform: uppercase;
    }
  }

  ul,
  ol {
    list-style-position: inside;

    p {
      display: inline;
    }
  }

  .careers__content {
    padding: 16px;
    background-color: ${colors.white};

    ${breakpoint.medium`
      width: calc(100% - 256px);
      padding: 32px;
    `}

    .careers__requirements {
      margin: 40px 0;
      font-size: 14px;
    }

    h4 {
      margin-top: 40px;
      margin-bottom: 16px;
      color: ${colors.black};
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      border-bottom: 1px solid ${colors.grey500};

      &:first-child {
        margin-top: 0;
      }
    }

    button {
      color: ${colors.blue300};
      border-bottom: 2px solid ${colors.blue300};
    }
  }
`

const CareersCard = (props) => (
  <StyledCareersCard className="bg--grey100">
    <div className="careers__title bg--blue100">
      <p className="font-weight--600">Post Doc</p>
      <h5 className="color--blue900">{props.title}</h5>
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

      {props.details && <Accordion openText="Read More" closedText="Read Less" content={documentToReactComponents(props.details.json)} />}
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
