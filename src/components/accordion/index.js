import React from 'react'

// Libraries
import styled from 'styled-components'

const StyledAccordion = styled.div`
  .accordion__trigger {
    font-weight: 600;
  }

  .accordion__content {
    max-height: ${(props) => (props.active ? '2500px' : '0')};
    margin-bottom: ${(props) => (props.active ? '40px' : '0')};
    transition: all 0.6s ease;
    overflow: hidden;
  }

  .accordion__trigger {
  }
`

class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  toggleAccordion = () => {
    this.setState((prevState) => ({
      active: !prevState.active
    }))
  }

  render = (props) => (
    <StyledAccordion active={this.state.active}>
      <div className="accordion__content">{this.props.content}</div>

      <button type="button" className="accordion__trigger" onClick={this.toggleAccordion}>
        {this.state.active ? (this.props.closedText ? this.props.closedText : '- Less Info') : this.props.openText ? this.props.openText : '+ More Info'}
      </button>
    </StyledAccordion>
  )
}

export default Accordion
