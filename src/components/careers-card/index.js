import React from 'react'

// Libraries
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

// Utils
import breakpoint from 'utils/breakpoints/'
import { colors } from 'utils/variables/'
import { getSlug } from "utils/functions/"

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

    .careers__link {
      display: inline-block;
      margin-top: 40px;
      border-bottom: 2px solid ${colors.blue300};
    }
  }
`

const CareersCard = (props) => (
  <StyledCareersCard className="bg--grey100">
    <div className="careers__title bg--blue100">
      <h5 className="color--blue500 font-weight--600">{props.title}</h5>
    </div>

    <div className="careers__content">
      <p className="summary">{props.summary}</p>
      <Link to={"/careers/" + getSlug(props.title)} className="careers__link color--blue300 font-weight--600">Learn more</Link>
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
