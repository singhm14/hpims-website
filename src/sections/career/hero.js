import React from 'react'

// Libraries
import styled from 'styled-components'
import { Link } from 'gatsby'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import HeroComponent from 'components/hero/'
import Container from 'components/container/'

// Icons
import IconCaret from 'assets/icons/icon-caret-right.inline.svg'

const StyledHero = styled(HeroComponent)`
  ${breakpoint.medium`
    min-height: 454px;
  `}

  .breadcrumb {
    svg {
      transform: rotate(180deg);
    }
  }
`

const Hero = (props) => {
  const data = props.data

  return (
    <StyledHero className="gradient--secondary">
      <Container>
        <Link to="/careers" className="breadcrumb color--blue500 font-weight--600">
          <IconCaret className="svg--stroke-blue500" />
          Careers
        </Link>
        <h2 className="color--blue500 font-weight--500">{data.jobTitle}</h2>
      </Container>
    </StyledHero>
  )
}

export default Hero
