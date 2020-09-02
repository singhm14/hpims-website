import React from 'react'

// Utils
import breakpoint from 'utils/breakpoints/'
import { colors } from 'utils/variables/'
import { getSlug } from 'utils/functions/'

// Libraries
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

// Icons
import ArrowRight from 'assets/icons/icon-arrow-right.inline.svg'

const StyledResearchProjectCard = styled.a`
  max-width: 448px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 32px 16px;
  box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;

  ${breakpoint.small`
    padding: 48px 32px 42px 40px;
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
  }

  .research-project__link {
    width: 100%;
    align-self: flex-end;
    display: flex;
    align-items: center;
    margin-top: 40px;
    font-weight: 600;

    svg {
      margin-left: 12px;

      * {
        stroke: ${colors.blue500};
      }
    }
  }
`

const ResearchProject = (props) => (
  <StyledResearchProjectCard className="bg--white color--black">
    <div>
      <div className="research-project__icon">{props.icon && <Img fixed={props.icon} alt={props.title} />}</div>

      <h4 className="research-project__title color--blue500">
        <Link to={'/research-projects/' + getSlug(props.title)} className="color--blue500">
          {props.title}
        </Link>
      </h4>
      <p className="color--grey900">{props.summary}</p>
    </div>

    <Link to={'/research-projects/' + getSlug(props.title)} className="research-project__link color--blue500">
      View full project
      <ArrowRight />
    </Link>
  </StyledResearchProjectCard>
)

ResearchProject.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string
}

export default ResearchProject
