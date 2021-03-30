import React from 'react'

// Libraries
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Variables
import { breakpoints } from 'utils/variables/'

// Components
import Container from 'components/container/'
import Button from 'components/button-link/'

// Icons
import BannerBackground from 'assets/icons/home/banner-background.inline.svg'

const StyledBanner = styled.section`
  position: relative;
  padding: 24px 0;
  margin-top: 56px;

  ${breakpoint.small`
    margin-top: 80px;
  `}

  ${Container} {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    z-index: 10;

    ${breakpoint.medium`
      flex-wrap: nowrap;
    `}
  }

  .banner__content {
    margin-bottom: 24px;

    ${breakpoint.medium`
      max-width: 926px;
      width: 80%;
      margin-bottom: 0;
    `}

    .title {
      margin-bottom: 16px;
      text-transform: uppercase;
    }
  }

  .banner__link {
    width: 100%;

    ${breakpoint.medium`
      width: auto;
    `}

    a {
      width: 100%;
    }
  }

  .banner__background {
    width: 80px;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    @media screen and (max-width: ${breakpoints.medium - 1}px) {
      width: 24px;
      height: auto;
    }
  }
`

const Banner = (props) => {
  const { title, content, link } = props.data

  return (
    <StyledBanner className="gradient--secondary">
      <Container>
        <div className="banner__content">
          <p className="title paragraph--large color--blue500 font-weight--600">{title}</p>
          <p className="paragraph--small color--blue500">{content.content}</p>
        </div>

        <div className="banner__link">
          <Button to={link} className="bg--blue300 bg-hover--blue500 color--white">
            Learn More
          </Button>
        </div>
      </Container>

      <BannerBackground className="banner__background" />
    </StyledBanner>
  )
}

export default Banner
