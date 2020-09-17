import React from 'react'

// Libraries
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'
import { colors } from 'utils/variables/'

// Components
import BackgroundTriangle from 'components/background-triangle/'
import Container from 'components/container/'
import Grid from 'components/grid/'

// Icons
import Icon1 from 'assets/icons/home/why-hpims-icon-1.inline.svg'
import Icon2 from 'assets/icons/home/why-hpims-icon-2.inline.svg'
import Icon3 from 'assets/icons/home/why-hpims-icon-3.inline.svg'
import Icon4 from 'assets/icons/home/why-hpims-icon-4.inline.svg'

const StyledWhyHPIMS = styled.section`
  position: relative;
  padding-top: 40px;
  padding-bottom: 60px;
  z-index: 10;

  ${breakpoint.medium`
    padding-top: 0;
    padding-bottom: 120px;
  `}

  ${Container} {
    position: relative;
    z-index: 2;
  }

  .section__title {
    max-width: 744px;

    .section__description {
      max-width: 544px;

      ${breakpoint.extraLarge`
        font-weight: 500;
      `}
    }
  }

  .why-hpims__item {
    width: 100%;
    height: 100%;
    padding-bottom: 24px;
    border-bottom: 2px solid ${colors.blue500};

    ${breakpoint.medium`
      padding-bottom: 40px;
    `}

    .icon {
      width: auto;
      height: 40px;
      display: flex;
      align-items: flex-start;
    }

    .title {
      max-width: 192px;
      margin-bottom: 8px;
      font-weight: 600;
    }
  }
`

const WhyHPIMS = () => (
  <StyledWhyHPIMS className="bg--blue100">
    <BackgroundTriangle className="svg--fill-blue100" />
    <Container>
      <div className="section__title">
        <p className="section__subtitle color--black">Why HPI•MS</p>
        <h2 className="color--blue500">A new era of digital health</h2>
        <p className="section__description color--black">Combining an innovative health care system with world class engineering expertise to offer unprecedented opportunities for improved global well-being and medical discovery.</p>
      </div>

      <Grid gutter="32" columns="4">
        <div className="grid__item">
          <div className="why-hpims__item">
            <div className="icon">
              <Icon1 />
            </div>
            <br />
            <p className="title color--black">Expanding possibilities in medicine</p>
            <p className="color--black paragraph--small">Advancements in data science and engineering are rapidly translated into medical discovery in partnership with clinical experts.</p>
          </div>
        </div>

        <div className="grid__item">
          <div className="why-hpims__item">
            <div className="icon">
              <Icon2 />
            </div>
            <br />
            <p className="title color--black">Improving access to critical data</p>
            <p className="color--black paragraph--small">Data science powered by 7.6 million clinical records is connected to diverse genomic sequencing, comprehensive medical imaging, and biometric cardiology data, alongside innovative clinical research.</p>
          </div>
        </div>

        <div className="grid__item">
          <div className="why-hpims__item">
            <div className="icon">
              <Icon3 />
            </div>
            <br />
            <p className="title color--black">Optimizing human health and well-being</p>
            <p className="color--black paragraph--small">By linking comprehensive patient data from hospital visits, genetic testing, and remote monitoring devices, patients and their physicians will be able to monitor, diagnose and inform personalized treatment plans.</p>
          </div>
        </div>

        <div className="grid__item">
          <div className="why-hpims__item">
            <div className="icon">
              <Icon4 />
            </div>
            <br />
            <p className="title color--black">Advancing the state of the art</p>
            <p className="color--black paragraph--small">Leveraging the latest technologies, creating novel methodologies, and bringing together interdisciplinary expertise, HPI⋅MS is leading the digital health revolution. </p>
          </div>
        </div>
      </Grid>
    </Container>
  </StyledWhyHPIMS>
)

export default WhyHPIMS
