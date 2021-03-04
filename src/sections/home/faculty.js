import React from 'react'

// Libraries
import { useStaticQuery, graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
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

const StyledFaculty = styled.section`
  padding-bottom: 40px;
  overflow: hidden;

  ${breakpoint.medium`
    padding-bottom: 260px;
  `}

  ${Container} {
    max-width: 928px;

    ${breakpoint.medium`
      padding: 0;
    `}
  }

  .faculty__carousel {
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
        margin-bottom: 8px;
        text-transform: uppercase;

        ${breakpoint.medium`
          margin-bottom: 16px;
        `}
      }

      p {
        margin-bottom: 8px;
      }

      .location {
        align-self: flex-end;
        margin-top: 40px;
        margin-bottom: 0;
        font-weight: 400;
        text-decoration: underline;

        ${breakpoint.medium`
          margin-top: 0;
        `}
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

const Faculty = () => {
  const {
    allContentfulHomesFacultySection: { nodes: data }
  } = useStaticQuery(graphql`
    query {
      allContentfulHomesFacultySection {
        nodes {
          subtitle
          title
          description {
            description
            json
          }
          photoGallery {
            fluid(maxWidth: 928, maxHeight: 522, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
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

  const subtitle = data[0].subtitle
  const title = data[0].title
  const description = data[0].description.json
  const photoGallery = data[0].photoGallery

  return (
    <StyledFaculty className="bg--blue500 color--white">
      <Slider {...settings} className="faculty__carousel">
        {photoGallery.map((photo) => (
          <Img className="event__image" fluid={photo.fluid} alt="HPI·MS" />
        ))}
      </Slider>

      <Container>
        <div className="event__description">
          <div className="date">
            <div>
              <p className="subtitle">{subtitle}</p>
              <h3>{title}</h3>
            </div>

            <Link to="/faculty" className="location">
              More info
            </Link>
          </div>

          <div className="summary">{description && documentToReactComponents(description)}</div>
        </div>
      </Container>
    </StyledFaculty>
  )
}

export default Faculty
