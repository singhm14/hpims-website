import React, { useEffect } from 'react'

// Libraries
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'
import { colors } from 'utils/variables/'
import { useToggle } from 'utils/functions/'

// Components
import { PrimaryButton } from 'components/buttons/'

// Icons
import Logo from 'assets/icons/icon-logo.inline.svg'

const StyledFiltersWrapper = styled.div`
  position: relative;

  .filters__trigger {
    width: 100%;

    ${breakpoint.small`
      display: none;
    `}
  }

  .filters__modal {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.white};
    opacity: ${(props) => (props.active ? '1' : '0')};
    visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
    overflow-y: auto;
    z-index: 99999;

    ${breakpoint.small`
      height: auto;
      position: relative;
      opacity: 1;
      visibility: visible;
    `}

    .modal__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 16px 8px 16px;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);

      ${breakpoint.small`
        display: none;
        padding: 0;
      `}

      .logo {
        width: 133px;
        display: inline-block;
      }

      .modal__toggler {
        display: flex;
        flex-direction: column;
        cursor: pointer;

        span {
          width: 22px;
          height: 3px;
          position: relative;
          display: flex;
          margin-bottom: 3px;
          background-color: ${colors.blue500};

          &:first-child {
            top: 3px;
            transform: rotate(45deg);
          }

          &:last-child {
            top: -3px;
            margin-bottom: 0;
            transform: rotate(-45deg);
          }
        }
      }
    }

    .modal__content {
      padding: 40px 16px;

      ${breakpoint.small`
        padding: 0;
      `}
    }
  }
`

const FiltersWrapper = (props) => {
  const [active, toggleActive] = useToggle()

  // Locks scroll if modal is open
  useEffect(() => {
    if (window.innerWidth < 768) {
      if (active) {
        document.querySelector('html').classList.add('no-scroll')
        document.querySelector('body').classList.add('no-scroll')
      } else {
        document.querySelector('html').classList.remove('no-scroll')
        document.querySelector('body').classList.remove('no-scroll')
      }
    }
  })

  return (
    <StyledFiltersWrapper active={active}>
      <div className="filters__modal">
        <div className="modal__header">
          <Logo className="logo" />
          <button onClick={() => toggleActive()} className="modal__toggler">
            <span></span>
            <span></span>
          </button>
        </div>

        <div className="modal__content">{props.children}</div>
      </div>
      <PrimaryButton onClick={() => toggleActive()} className="filters__trigger bg-hover--blue500 color--blue500 color-hover--white border--blue500 border-hover--blue500" text="Filter Publications" />
    </StyledFiltersWrapper>
  )
}

export default FiltersWrapper
