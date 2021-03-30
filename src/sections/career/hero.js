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
  min-height: auto;
  padding: 112px 0 56px 0;

  ${breakpoint.medium`
    min-height: auto!important;
    padding: 174px 0 96px 0;
  `}

  ${Container} {
    max-width: 928px;
  }

  .breadcrumb {
    margin-bottom: 32px;

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
