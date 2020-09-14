import React from 'react'

// Libraries
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Icons
import Rectangle from 'assets/icons/icon-rectangle.inline.svg'

const StyledBackgroundTriangle = styled.div`
  width: 100vw;
  height: 458px;
  position: absolute;
  bottom: 100%;
  left: 0;
  overflow: hidden;

  svg {
    max-width: 2600px;
    width: 2600px !important;
    height: 458px !important;
    float: right;
  }
`

const BackgroundTriangle = (props) => (
  <StyledBackgroundTriangle className={props.className}>
    <Rectangle />
  </StyledBackgroundTriangle>
)

export default BackgroundTriangle
