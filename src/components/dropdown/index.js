import React from 'react'

// Libraries
import styled from 'styled-components'
// import PropTypes from 'prop-types'

// Utils
import { colors } from 'utils/variables/'
import { getSlug, unSlug } from 'utils/functions/'

// Icons
import IconCaretDown from 'assets/icons/icon-caret-down.inline.svg'
import IconCheck from 'assets/icons/icon-check.svg'

const StyledDropdown = styled.div`
  position: relative;
  margin-top: ${(props) => (props.selectedOption !== '' ? '16px' : '0')};

  .dropdown__label {
    position: relative;
    display: inline-block;
    font-weight: 600;
    transform: ${(props) => (props.selectedOption !== '' ? 'translateY(0)' : 'translateY(32px)')};
    z-index: 999;
  }

  .dropdown__clear {
    padding: 12px;
  }

  .dropdown {
    position: relative;
    z-index: 1000;

    .dropdown__toggler {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px 8px 0;
      border-bottom: 1px solid;
      border-color: ${(props) => (props.active ? colors.blue500 : colors.grey300)};

      span {
        min-height: 24px;
      }

      svg {
        transition: all 0s;
        transform: ${(props) => (props.active ? 'rotate(180deg)' : 'rotate(0deg)')};
      }
    }

    .dropdown__options {
      max-height: ${(props) => (props.active ? '330px' : '0')};
      margin-top: 8px;
      background-color: ${colors.white};
      list-style: none;
      box-shadow: ${(props) => (props.active ? '2px 2px 20px 4px rgba(0, 0, 0, 0.16)' : null)};
      overflow: auto;

      li {
        padding: 16px;
        border-bottom: 1px solid ${colors.grey500};

        &:first-child {
          border-top: 0;
        }

        &:last-child {
          border-bottom: 0;
        }

        &.active {
          color: ${colors.blue500};
          font-weight: 600;

          button {
            &::after {
              content: url(${IconCheck});
              display: inline-block;
            }
          }
        }

        button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
        }
      }
    }
  }
`

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      selectedOption: ''
    }
  }

  componentDidMount = () => {
    if (this.props.defaultOption) {
      this.setState({
        selectedOption: unSlug(this.props.defaultOption)
      })
    }
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      active: !prevState.active
    }))
  }

  closeDropdown = () => {
    if (this.state.active) {
      this.setState({
        active: false
      })
    }
  }

  handleOptionClick = (event) => {
    const option = event.target.innerText

    this.setState(
      {
        selectedOption: option
      },
      this.closeDropdown()
    )

    this.props.callbackFunction(event)
  }

  handleReset = () => {
    this.setState(
      {
        selectedOption: ''
      },
      () => {
        this.closeDropdown()
        this.props.resetFunction()
      }
    )
  }

  render = (props) => (
    <StyledDropdown active={this.state.active} selectedOption={this.state.selectedOption}>
      <p className="dropdown__label color--blue500">{this.props.label}</p>

      <div id={getSlug(this.props.label)} className="dropdown">
        <button type="button" className="dropdown__toggler color--blue500" onClick={this.toggleDropdown}>
          <span>{this.state.selectedOption}</span>
          <IconCaretDown className="svg--stroke-blue500" />
        </button>

        <ul className="dropdown__options">
          {this.props.options.map((option, index) => (
            <li key={index} className={this.state.selectedOption === option ? 'active' : null}>
              <button type="button" onClick={this.handleOptionClick}>
                {option}
              </button>
            </li>
          ))}
        </ul>
        {this.state.active && (
          <button type="button" onClick={this.handleReset} className="dropdown__clear color--blue300 font-weight--600">
            Clear filter
          </button>
        )}
      </div>
    </StyledDropdown>
  )
}

export default Dropdown
