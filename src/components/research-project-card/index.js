import React from 'react'

// Utils
import breakpoint from 'utils/breakpoints/'
import { getSlug } from 'utils/functions/'

// Libraries
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const StyledResearchProjectCard = styled.a`
  max-width: 448px;
  display: block;
  padding: 32px 16px;
  box-sizing: border-box;

  ${breakpoint.small`
    padding: 40px;
  `}

  .research-project__icon {
    width: 88px;
    margin-bottom: 24px;
  }

  .research-project__title {
    margin-bottom: 8px;
  }

  .research-project__link {
    display: flex;
    margin-top: 48px;
  }
`

const ResearchProject = (props) => (
  <StyledResearchProjectCard className="bg--grey100 color--black">
    <div className="research-project__icon">
      <Img fixed={props.icon} alt={props.title} />
    </div>

    <h3 className="research-project__title">{props.title}</h3>
    <p className="color--grey900">{props.summary}</p>

    <Link to={'/research-projects/' + getSlug(props.title)} className="research-project__link color--black">
      Find out more
    </Link>
  </StyledResearchProjectCard>
)

ResearchProject.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string
}

export default ResearchProject
