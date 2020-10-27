import React from 'react'

// Utils
import breakpoint from 'utils/breakpoints/'
import { getSlug } from 'utils/functions/'

// Libraries
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

// Components
import { Tertiary } from 'components/buttons/'

const StyledResearchProjectCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 32px 24px;
  box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.08);

  ${breakpoint.medium`
    padding: 48px;
  `}

  .card__title {
    ${breakpoint.medium`
      width: calc((100% - 32px) / 2);
      display: flex;
    `}

    .icon {
      margin-bottom: 32px;

      ${breakpoint.medium`
        margin: 0 32px 0 0;
      `}
    }

    .title {
      ${breakpoint.medium`
        display: flex;
        flex-wrap: wrap;
      `}
    }

    .link {
      display: none;

      ${breakpoint.medium`
        align-self: flex-end;
        display: inline-flex;
      `}
    }
  }

  .card__body {
    margin: 16px 0;

    ${breakpoint.medium`
      width: calc((100% - 32px) / 2);
      margin: 0;
    `}
  }

  .card__link {
    ${breakpoint.medium`
      display: none;
    `}
  }
`

const ResearchProjectCard = (props) => {
  return (
    <StyledResearchProjectCard className="bg--white">
      <div className="card__title">
        <div className="icon">{props.icon && <Img fixed={props.icon} alt={props.title} />}</div>
        <div className="title">
          <h4 className="color--blue500 font-weight--600">
            <Link to={'/research-projects/' + getSlug(props.title)}>{props.title}</Link>
          </h4>
          <Tertiary className="link color--blue300 color-hover--blue500 svg--stroke-blue300 svg-hover--stroke-blue500 font-weight--600" to={'/research-projects/' + getSlug(props.title)} text="View full project" />
        </div>
      </div>
      <div className="card__body">{props.summary}</div>
      <Tertiary className="card__link color--blue300 color-hover--blue500 svg--stroke-blue300 svg-hover--stroke-blue500 font-weight--600" to={'/research-projects/' + getSlug(props.title)} text="View full project" />
    </StyledResearchProjectCard>
  )
}

export default ResearchProjectCard
