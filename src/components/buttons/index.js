import React from 'react'

// Libraries

// Components
import styled from 'styled-components'
import { Link } from 'gatsby'

// Icons
import CaretRight from 'assets/icons/icon-caret-right.inline.svg'
import IconExternalLink from 'assets/icons/icon-external-link.inline.svg'

const StyledButton = styled(Link)`
  display: inline-flex;
  padding: 8px 24px;
  box-sizing: border-box;

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

export const Primary = (props) => (
  <StyledButton to={props.to} className={props.className}>
    {props.text}
    <CaretRight />
  </StyledButton>
)

const StyledPrimaryExternal = styled.a`
  display: inline-flex;
  padding: 8px 24px;
  box-sizing: border-box;

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

export const PrimaryExternal = (props) => (
  <StyledPrimaryExternal href={props.href} className={props.className}>
    {props.text} <CaretRight />
  </StyledPrimaryExternal>
)

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

const StyledExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  font-weight: 600;

  svg {
    position: relative;
    top: 1px;
    margin-left: 8px;
    transition: all 0.6s ease;

    * {
      transition: all 0.6s ease;
    }
  }
`

export const ExternalLink = (props) => (
  <StyledExternalLink href={props.href} className={props.className} target="_blank" rel="noopener noreferrer">
    {props.text}
    <IconExternalLink />
  </StyledExternalLink>
)
