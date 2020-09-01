import React from 'react'

// Libraries
import styled from 'styled-components'

const StyledAccordion = styled.div`
  .accordion__trigger {
    font-weight: 600;
    text-transform: uppercase;
  }

  .accordion__content {
    max-height: ${(props) => (props.active ? '500000px' : '0')};
    transition: max-height 0.6s ease;
    overflow: hidden;
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
      <button type="button" className="accordion__trigger" onClick={this.toggleAccordion}>
        {this.state.active ? '- Less Info' : '+ More Info'}
      </button>

      <div className="accordion__content">{this.props.content}</div>
    </StyledAccordion>
  )
}

export default Accordion
