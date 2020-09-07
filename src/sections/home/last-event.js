import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Slider from 'react-slick'

// Utils
import breakpoint from 'utils/breakpoints/'
import { colors } from 'utils/variables/'

// Components
import Container from 'components/container/'
import Img from 'gatsby-image'

// Icons
import SliderArrow from 'assets/icons/icon-carousel-arrow.inline.svg'

const StyledLastEvent = styled.section`
  padding: 40px 0;
  overflow: hidden;

  ${breakpoint.medium`
    padding: 80px 0;
  `}

  ${Container} {
    max-width: 736px;
  }

  .section__title {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .event__carousel {
    margin-bottom: 56px;
  }

  .slick-track {
    display: flex;
  }

  .slick-slide {
    max-width: 736px;
    width: 100%;
    padding: 0 16px;
    opacity: 0.5;
    box-sizing: content-box;
    transition: all 0.6s;

    &.slick-active {
      opacity: 1;
    }
  }

  .slick-arrow {
    z-index: 1000;

    svg {
      * {
        stroke: ${colors.white};
      }
    }

    &::before {
      display: none;
    }

    &.slick-prev {
      ${breakpoint.large`
        left: calc(((100vw - 736px) / 2) - 168px);
      `}
    }

    &.slick-next {
      ${breakpoint.large`
        right: calc(((100vw - 736px) / 2) - 168px);
      `}
    }
  }

  .event__image {
    max-width: 736px;
    width: 100%;
    display: block;
  }

  .event__description {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .date {
      max-width: 221px;
      margin-bottom: 24px;
      font-weight: 600;

      p {
        margin-bottom: 8px;
      }
    }

    .summary {
      max-width: 448px;
    }
  }
`

const StyledArrow = styled.div`
  display: flex;
  align-items: flex-start;

  svg {
    transform: ${(props) => (props.prev ? 'rotate(180deg)' : 'rotate(0deg)')};
  }

  ${Container} {
    max-width: 736px;
  }
`

const ArrowPrev = (props) => {
  return (
    <StyledArrow prev onClick={props.onClick} className={props.className}>
      <SliderArrow />
    </StyledArrow>
  )
}

const ArrowNext = (props) => {
  return (
    <StyledArrow onClick={props.onClick} className={props.className}>
      <SliderArrow />
    </StyledArrow>
  )
}

const LastEvent = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/event/event-image-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 736, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    variableWidth: true,
    centerMode: true,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false
        }
      }
    ]
  }

  return (
    <StyledLastEvent className="bg--blue100 color--black">
      <Container>
        <div className="section__title color--blue500">
          <p className="section__subtitle">Our Last Event</p>
          <h2>HPI - Mount Sinai Digital Health Forum</h2>
        </div>
      </Container>

      <Slider {...settings} className="event__carousel">
        <Img className="event__image" fluid={data.file.childImageSharp.fluid} alt="Our last event" />
        <Img className="event__image" fluid={data.file.childImageSharp.fluid} alt="Our last event" />
        <Img className="event__image" fluid={data.file.childImageSharp.fluid} alt="Our last event" />
        <Img className="event__image" fluid={data.file.childImageSharp.fluid} alt="Our last event" />
        <Img className="event__image" fluid={data.file.childImageSharp.fluid} alt="Our last event" />
        <Img className="event__image" fluid={data.file.childImageSharp.fluid} alt="Our last event" />
      </Slider>

      <Container>
        <div className="event__description">
          <div className="date">
            <p className="paragraph--large">2019</p>
            <h4>Postdam, Germany</h4>
          </div>

          <div className="summary">
            <p>We hosted a successful two-day conference on November 21 and November 22, 2019 at the Hasso Plattner Institute in Potsdam. The Forum introduced visions and strategies for driving the digital transformation of health care. With more than 400 attendees and livestream viewers from around the world, the conference facilitated transatlantic co-innovation among international experts in medical and biological sciences, engineering, computer science, and research, from world-leading organizations.</p>
          </div>
        </div>
      </Container>
    </StyledLastEvent>
  )
}

export default LastEvent
