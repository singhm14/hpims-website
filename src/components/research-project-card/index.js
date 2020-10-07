import React from 'react'

// Utils
import breakpoint from 'utils/breakpoints/'
import { getSlug } from 'utils/functions/'

// Libraries
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

// Components
import { Tertiary } from 'components/buttons/'

const StyledResearchProjectCard = styled.div`
  max-width: 448px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 32px 24px;
  text-align: left;
  box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;

  ${breakpoint.small`
    padding: 40px 24px 32px 24px;
  `}

  ${breakpoint.medium`
    padding: 48px 40px 42px 40px;
  `}

  ${breakpoint.medium`
    min-height: 448px;
  `}

  .research-project__icon {
    width: 52px;
    height: 52px;
    display: flex;
    align-items: flex-start;
    margin-bottom: 32px;
  }

  .research-project__title {
    width: 100%;
    margin-bottom: 16px;

    ${breakpoint.small`
      margin-bottom: 8px;
    `}

    ${breakpoint.medium`
      margin-bottom: 16px;
    `}
  }

  .research-project__link {
    width: 100%;
    align-self: flex-end;
    display: flex;
    align-items: center;
    margin-top: 40px;
    font-weight: 600;

    ${breakpoint.small`
      margin-top: 24px;
    `}

    ${breakpoint.medium`
      margin-top: 40px;
    `}
  }

  p {
    font-size: 14px;

    ${breakpoint.medium`
      font-size: 16px;
    `}
  }
`

const ResearchProject = (props) => (
  <StyledResearchProjectCard className="bg--white color--black">
    <div>
      <div className="research-project__icon">{props.icon && <Img fixed={props.icon} alt={props.title} />}</div>

      <h4 className="research-project__title color--blue500 font-weight--600">
        <Link to={'/research-projects/' + getSlug(props.title)} className="color--blue500">
          {props.title}
        </Link>
      </h4>
      <p className="color--grey900">{props.summary}</p>
    </div>

    <Tertiary to={'/research-projects/' + getSlug(props.title)} className="research-project__link color--blue300 color-hover--blue500 svg--stroke-blue300 svg-hover--stroke-blue500" text="View full project" />
  </StyledResearchProjectCard>
)

ResearchProject.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  summary: PropTypes.string
}

export default ResearchProject
