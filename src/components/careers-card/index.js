import React from 'react'

// Libraries
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

// Utils
import { getSlug } from 'utils/functions/'

// Icons
import IconCaret from 'assets/icons/icon-caret-right.inline.svg'

const StyledCareersCard = styled(Link)`
  display: block;
  box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.08);

  .card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;

    svg {
      width: auto;
      height: 18px;
    }
  }

  .card__body {
    padding: 24px;
  }
`

const CareersCard = (props) => (
  <StyledCareersCard className="bg--grey100" to={'/careers/' + getSlug(props.title)}>
    <div className="card__header bg--blue100 color--blue500">
      <h5 className="color--blue500 font-weight--600">{props.title}</h5>
      <IconCaret className="svg--stroke-blue500" />
    </div>

    <div className="card__body">{props.summary}</div>
  </StyledCareersCard>
)

CareersCard.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  requirements: PropTypes.object,
  applicationInstructions: PropTypes.object
}

export default CareersCard
