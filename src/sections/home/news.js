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
import NewsCard from 'components/news-card/'
import Triangle from 'components/background-triangle/'

// Icons
import SliderArrow from 'assets/icons/icon-carousel-arrow.inline.svg'

const StyledNews = styled.section`
  position: relative;
  padding: 40px 0 120px 0;
  z-index: 5;

  ${breakpoint.medium`
    padding: 0 0 120px 0;
  `}

  .slick-list {
    margin: 0 -16px;
  }

  .slick-track {
    display: flex;
  }

  .slick-slide {
    height: auto;
    margin: 0 16px;

    > div {
      height: 100%;
    }
  }

  .slick-dots {
    height: 8px;
    bottom: -36px;
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
          background-color: ${colors.blue500};
        }
      }

      button {
        width: 8px;
        height: 8px;
        padding: 0;
        background-color: ${colors.grey300};
        border-radius: 50%;

        &::before {
          display: none;
        }
      }
    }
  }

  .slick-arrow {
    width: 10px;
    height: 16px;

    &::before {
      display: none;
    }

    svg {
      path {
        stroke-width: 3;
      }
    }

    &.slick-prev {
      top: calc(100% + 32px);
      left: 0;

      ${breakpoint.medium`
        top: 50%;
        left: -74px;
      `}
    }

    &.slick-next {
      top: calc(100% + 32px);
      right: 0;

      ${breakpoint.medium`
        top: 50%;
        right: -74px;
      `}
    }
  }
`

const StyledArrow = styled.div`
  display: flex;
  align-items: flex-start;

  svg {
    transform: ${(props) => (props.prev ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`

const ArrowPrev = (props) => {
  return (
    <StyledArrow prev onClick={props.onClick} className={props.className}>
      <SliderArrow className="svg--stroke-blue500" />
    </StyledArrow>
  )
}

const ArrowNext = (props) => {
  return (
    <StyledArrow onClick={props.onClick} className={props.className}>
      <SliderArrow className="svg--stroke-blue500" />
    </StyledArrow>
  )
}

const News = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNews(sort: { fields: date, order: DESC }) {
        nodes {
          id
          journal
          title
          date(formatString: "MM.DD.YYYY")
          link
        }
      }
    }
  `)

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          dots: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <StyledNews>
      <Triangle className="svg--fill-white" />
      <Container>
        <div className="section__title">
          <p className="section__subtitle color--black">Press</p>
          <h2 className="color--blue500">HPI·MS in the news</h2>
        </div>

        <Slider {...settings}>
          {data.allContentfulNews.nodes.map((news) => (
            <NewsCard key={news.id} link={news.link} journal={news.journal} title={news.title} date={news.date} />
          ))}
        </Slider>
      </Container>
    </StyledNews>
  )
}

export default News
