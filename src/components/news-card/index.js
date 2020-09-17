import React from 'react'

// Utils
import { colors } from 'utils/variables/'

// Libraries
import styled from 'styled-components'

const StyledNewsCard = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-bottom: 4px solid ${colors.blue500};
  box-sizing: border-box;

  p {
    width: 100%;
  }

  .news__journal {
    font-weight: 600;
    text-transform: uppercase;
  }

  .news__title {
    margin: 8px 0 40px 0;
    font-size: 22px;
  }

  .news__link {
    align-self: flex-end;
  }
`

const NewsCard = (props) => (
  <StyledNewsCard href={props.link} target="_blank" rel="noopener noreferrer">
    <div>
      <p className="news__journal paragraph--small color--grey900">{props.journal}</p>
      <p className="news__title color--blue300">{props.title}</p>
    </div>

    <p className="news__link color--black">{props.date}</p>
  </StyledNewsCard>
)

export default NewsCard
