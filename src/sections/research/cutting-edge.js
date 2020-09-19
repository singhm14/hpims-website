import React from 'react'

// Libraries
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'
import Grid from 'components/grid/'

// Icons
import Icon1 from 'assets/icons/research/research-icon-1.inline.svg'
import Icon2 from 'assets/icons/research/research-icon-2.inline.svg'
import Icon3 from 'assets/icons/research/research-icon-3.inline.svg'
import Icon4 from 'assets/icons/research/research-icon-4.inline.svg'

const StyledCuttingEdge = styled.section`
  padding: 64px 0 35vw 0;

  ${breakpoint.small`
    padding: 80px 0 20vw 0;
  `}

  ${Container} {
    max-width: 928px;
  }

  h3 {
    margin-bottom: 32px;

    ${breakpoint.medium`
      margin-bottom: 48px;
    `}
  }

  .grid__item {
    ${breakpoint.medium`
      margin-bottom: 50px;
    `}
  }

  .research-item {
    display: flex;

    .icon {
      flex-shrink: 0;
      width: 56px;
      margin-right: 16px;

      ${breakpoint.large`
        width: 64px;
        margin-right: 36px;
      `}

      svg {
        width: 100%;
        height: auto;
      }
    }

    .title {
      margin-bottom: 8px;
    }
  }
`

const CuttingEdge = () => (
  <StyledCuttingEdge>
    <Container>
      <h3 className="color--blue500">Cutting Edge Research</h3>
      <Grid gutter="32" columns="2">
        <div className="grid__item">
          <div className="research-item">
            <div className="icon">
              <Icon1 />
            </div>
            <div className="content">
              <p className="title paragraph--large color--blue500 font-weight--600">Connected Technology</p>
              <p className="paragraph--small">We are working towards a more connected health care system by leveraging patient-generated health data and building digital applications utilizing remote sensors and wearable technologies. </p>
            </div>
          </div>
        </div>

        <div className="grid__item">
          <div className="research-item">
            <div className="icon">
              <Icon2 />
            </div>
            <div className="content">
              <p className="title paragraph--large color--blue500 font-weight--600">Health IT Systems Engineering</p>
              <p className="paragraph--small">We are building state-of-the-art computational frameworks and architectures to enable rapid scientific discovery alongside translational applications into real-world clinical settings.</p>
            </div>
          </div>
        </div>

        <div className="grid__item">
          <div className="research-item">
            <div className="icon">
              <Icon3 />
            </div>
            <div className="content">
              <p className="title paragraph--large color--blue500 font-weight--600">Multimodal Data</p>
              <p className="paragraph--small">By creating an innovative environment to access electronic health records, imaging, -omics, and sensor data, we will advance health-care-driven Artificial Intelligence (AI)-based solutions.</p>
            </div>
          </div>
        </div>

        <div className="grid__item">
          <div className="research-item">
            <div className="icon">
              <Icon4 />
            </div>
            <div className="content">
              <p className="title paragraph--large color--blue500 font-weight--600">Machine Learning and Artificial Intelligence</p>
              <p className="paragraph--small">We are advancing data science methodologies in medicine with insights that benefit patients and healthcare providers through better clinical prediction and early warning systems.</p>
            </div>
          </div>
        </div>
      </Grid>
    </Container>
  </StyledCuttingEdge>
)

export default CuttingEdge
