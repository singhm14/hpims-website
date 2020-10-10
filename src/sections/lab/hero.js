import React from 'react'

// Libraries
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import PageHero from 'components/hero/'

const StyledHero = styled(PageHero)`
  min-height: 520px;

  ${breakpoint.medium`
    min-height: 472px;
  `}
`

const Hero = () => <StyledHero className="gradient--secondary color--grey900"></StyledHero>

export default Hero
