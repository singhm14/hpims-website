import React from 'react'

// Libraries

// Components
import styled from 'styled-components'
import { Link } from 'gatsby'

// Icons
import CaretRight from 'assets/icons/icon-caret-right.inline.svg'

const StyledTertiary = styled(Link)`
  display: inline-flex;

  &:hover {
    svg {
      transform: translateX(4px);
    }
  }

  svg {
    position: relative;
    top: 1px;
    margin-left: 8px;
  }
`

export const Tertiary = (props) => (
  <StyledTertiary to={props.to} className={props.className}>
    {props.text}
    <CaretRight />
  </StyledTertiary>
)
