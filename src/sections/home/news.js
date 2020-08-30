import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Slider from 'react-slick'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'
import NewsCard from 'components/news-card/'

// Icons
import SliderArrow from 'assets/icons/icon-carousel-arrow.inline.svg'

const StyledNews = styled.section`
  padding: 60px 0;

  ${breakpoint.medium`
    padding: 120px 0;
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

  .slick-arrow {
    &::before {
      display: none;
    }

    &.slick-prev {
      left: -50px;
    }

    &.slick-next {
      right: -50px;
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
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <StyledNews>
      <Container>
        <div className="section__title">
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
