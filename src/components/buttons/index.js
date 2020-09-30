import React from 'react'

// Libraries

// Components
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

// Utils
import { colors } from 'utils/variables/'

// Icons
import CaretRight from 'assets/icons/icon-caret-right.inline.svg'
import IconExternalLink from 'assets/icons/icon-external-link.inline.svg'

const StyledPrimaryButton = styled.button`
  display: inline-flex;
  justify-content: center;
  padding: 8px 24px;
  transition: all 0.3s ease;
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

export const PrimaryButton = (props) => (
  <StyledPrimaryButton type="button" {...props}>
    {props.text}
  </StyledPrimaryButton>
)

const StyledPrimary = styled(Link)`
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
  <StyledPrimary to={props.to} className={props.className}>
    {props.text}
    <CaretRight />
  </StyledPrimary>
)

const StyledPrimaryExternal = styled.a`
  display: inline-flex;
  padding: 8px 24px;
  box-sizing: border-box;

  ${(props) =>
    props.disabled &&
    css`
      color: ${colors.grey500}!important;
      border-color: ${colors.grey500}!important;
      cursor: not-allowed !important;
      pointer-events: none !important;
    `}

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
  <StyledPrimaryExternal disabled={props.disabled} href={props.href} className={props.className}>
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

const StyledExternalTertiary = styled.a`
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

export const ExternalTertiary = (props) => (
  <StyledExternalTertiary href={props.to} className={props.className}>
    {props.text}
    <CaretRight />
  </StyledExternalTertiary>
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
