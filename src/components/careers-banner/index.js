import React from 'react'

// Libraries
import styled from 'styled-components'

// Components
import Container from 'components/container/'
import { Tertiary } from 'components/buttons/'

// Icons
import BannerTriangle from 'assets/icons/careers-banner-triangle.inline.svg'

const StyledCareersBanner = styled.section`
  position: relative;
  padding: 64px 0 56px 0;
  background: linear-gradient(100.86deg, #025e8a 34.07%, #4ec3f7 88.87%);

  .banner__content {
    max-width: 352px;
  }

  .banner__triangle {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`

const CareersBanner = () => (
  <StyledCareersBanner>
    <BannerTriangle className="banner__triangle" />
    <Container>
      <div className="banner__content">
        <h4 className="color--white font-weight--600">We are looking for exceptional talents</h4>
        <br />
        <Tertiary to="/careers" text="Check out our job postings" className="color--white svg--stroke-white" />
      </div>
    </Container>
  </StyledCareersBanner>
)

export default CareersBanner
