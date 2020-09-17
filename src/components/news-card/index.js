import React from 'react'

// Utils
import { colors } from 'utils/variables/'

// Libraries
import styled from 'styled-components'

// Icons
import IconExternalLink from 'assets/icons/icon-external-link.inline.svg'

const StyledNewsCard = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-bottom: 4px solid ${colors.blue500};
  box-sizing: border-box;

  &:hover {
    .news__title {
      color: ${colors.blue500};
    }

    .news__footer {
      .footer__link {
        opacity: 1;
      }
    }
  }

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
    transition: all 0.3s ease;
  }

  .news__footer {
    width: 100%;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .footer__link {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      opacity: 0;
      transition: all 0.3s ease;

      svg {
        margin-left: 8px;
      }
    }
  }
`

const NewsCard = (props) => (
  <StyledNewsCard href={props.link} target="_blank" rel="noopener noreferrer">
    <div>
      <p className="news__journal paragraph--small color--grey900">{props.journal}</p>
      <p className="news__title color--blue300 font-weight--600">{props.title}</p>
    </div>

    <div className="news__footer">
      <p className="footer__date color--black">{props.date}</p>
      <p className="footer__link color--blue300 font-weight--600">
        Open Publication <IconExternalLink className="svg--stroke-blue300" />
      </p>
    </div>
  </StyledNewsCard>
)

export default NewsCard
