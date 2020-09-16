import React from 'react'

// Libraries
import styled from 'styled-components'

// Icons
import Rectangle from 'assets/icons/icon-rectangle.inline.svg'

const StyledBackgroundTriangle = styled.div`
  width: 100%;
  height: 458px;
  position: absolute;
  right: 0;
  bottom: 100%;
  left: 0;
  overflow: hidden;
  z-index: -1;

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
