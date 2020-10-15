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
  padding-bottom: 40px;
  overflow: hidden;

  ${breakpoint.medium`
    padding-bottom: 120px;
  `}

  ${Container} {
    max-width: 928px;

    ${breakpoint.medium`
      padding: 0;
    `}
  }

  .event__carousel {
    margin-bottom: 72px;
  }

  .slick-track {
    display: flex;
  }

  .slick-slide {
    max-width: 928px;
    width: 100%;
    padding: 0 4px;
    opacity: 0.5;
    box-sizing: content-box;
    transition: all 0.6s;

    &.slick-active {
      opacity: 1;
    }
  }

  .slick-dots {
    height: 8px;
    bottom: -20px;
    display: flex !important;
    align-items: center;
    justify-content: center;

    li {
      width: 8px;
      height: 8px;
      margin: 0 4px 0 0;

      &:last-child {
        margin-right: 0;
      }

      &.slick-active {
        button {
          background-color: ${colors.blue300};
        }
      }

      button {
        width: 8px;
        height: 8px;
        padding: 0;
        background-color: ${colors.white};
        border-radius: 50%;

        &::before {
          display: none;
        }
      }
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
    max-width: 928px;
    width: 100%;
    display: block;
  }

  .event__description {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .date {
      max-width: 416px;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 24px;
      font-weight: 600;

      ${breakpoint.medium`
        margin-bottom: 0;
      `}

      .subtitle {
        margin-bottom: 16px;
        text-transform: uppercase;
      }

      p {
        margin-bottom: 8px;
      }

      .location {
        align-self: flex-end;
        margin-bottom: 0;
        font-weight: 400;
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
      image1: file(relativePath: { eq: "home/event/event-image-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 928, maxHeight: 480, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "home/event/event-image-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 928, maxHeight: 480, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "home/event/event-image-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 928, maxHeight: 480, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "home/event/event-image-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 928, maxHeight: 480, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image5: file(relativePath: { eq: "home/event/event-image-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 928, maxHeight: 480, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image6: file(relativePath: { eq: "home/event/event-image-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 928, maxHeight: 480, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image7: file(relativePath: { eq: "home/event/event-image-7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 928, maxHeight: 480, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const settings = {
    dots: false,
    infinite: true,
    autoplay: 3000,
    speed: 600,
    variableWidth: true,
    centerMode: true,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          dots: true,
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
    <StyledLastEvent className="bg--blue500 color--white">
      <Slider {...settings} className="event__carousel">
        <Img className="event__image" fluid={data.image1.childImageSharp.fluid} alt="Our last event" />
        <Img className="event__image" fluid={data.image2.childImageSharp.fluid} alt="Our last event" />
        <Img className="event__image" fluid={data.image3.childImageSharp.fluid} alt="Our last event" />
        <Img className="event__image" fluid={data.image4.childImageSharp.fluid} alt="Our last event" />
        <Img className="event__image" fluid={data.image5.childImageSharp.fluid} alt="Our last event" />
        <Img className="event__image" fluid={data.image6.childImageSharp.fluid} alt="Our last event" />
        <Img className="event__image" fluid={data.image7.childImageSharp.fluid} alt="Our last event" />
      </Slider>

      <Container>
        <div className="event__description">
          <div className="date">
            <div>
              <p className="subtitle paragraph--large">Our Last Event</p>
              <h3>HPI - Mount Sinai Digital Health Forum</h3>
            </div>

            <p className="location">2019 | Potsdam, Germany</p>
          </div>

          <div className="summary">
            <p>We hosted a successful two-day conference on November 21 and November 22, 2019 at the Hasso Plattner Institute in Potsdam. The Forum introduced visions and strategies for driving the digital transformation of health care.</p>
            <br />
            <p>With more than 400 attendees and livestream viewers from around the world, the conference facilitated transatlantic co-innovation among international experts in medical and biological sciences, engineering, computer science, and research, from world-leading organizations.</p>
          </div>
        </div>
      </Container>
    </StyledLastEvent>
  )
}

export default LastEvent
