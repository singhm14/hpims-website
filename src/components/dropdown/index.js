import React from 'react'

// Libraries
import styled from 'styled-components'
// import PropTypes from 'prop-types'

// Utils
import { colors } from 'utils/variables/'
import { getSlug } from 'utils/functions/'

// Icons
import IconCaretDown from 'assets/icons/icon-caret-down.inline.svg'

const StyledDropdown = styled.div`
  position: relative;

  .dropdown__label {
    position: relative;
    display: inline-block;
    font-weight: 600;
    transform: ${(props) => (props.selectedOption !== '' ? 'translateY(0)' : 'translateY(32px)')};
    z-index: 999;
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
    }

    .dropdown__options {
      max-height: ${(props) => (props.active ? '500px' : '0')};
      padding: 0 8px;
      margin-top: 8px;
      background-color: ${colors.white};
      list-style: none;
      box-shadow: ${(props) => (props.active ? '2px 2px 20px 4px rgba(0, 0, 0, 0.16)' : null)};
      overflow: hidden;

      li {
        padding: 16px 8px;
        border-bottom: 1px solid ${colors.grey300};

        &:first-child {
          border-top: 0;
        }

        &:last-child {
          border-bottom: 0;
        }

        button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
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

  toggleDropdown = () => {
    this.setState((prevState) => ({
      active: !prevState.active
    }))
  }

  openDropdown = () => {}

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
      </div>
    </StyledDropdown>
  )
}

export default Dropdown
