import React from 'react'

// Libraries
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// Utils
import { colors } from 'utils/variables/'
import breakpoint from 'utils/breakpoints/'
import { getSlug } from 'utils/functions/'

// Icons
import ExternalLink from 'assets/icons/icon-external-link.inline.svg'

const StyledPublicationCard = styled.a`
  display: block;
  padding: 32px 16px;
  box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.16);

  ${breakpoint.small`
    padding: 40px;
  `}

  .publication__info {
    font-size: 14px;
    text-transform: uppercase;

    span {
      font-weight: 600;

      &::after {
        content: '|';
        margin: 0 8px;
      }

      &:last-child {
        text-transform: capitalize;

        &::after {
          content: '';
          margin: 0;
        }
      }
    }
  }

  .publication__title {
    margin: 16px 0;
  }

  .card__footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;

    ${breakpoint.medium`
      flex-wrap: no-wrap;
    `}

    .publication__tags {
      width: 100%;
      margin-bottom: 16px;
      font-size: 14px;

      ${breakpoint.medium`
        width: auto;
        margin-bottom: 0;
      `}

      .tag {
        margin-right: 16px;
        border-bottom: 1px solid ${colors.blue300};

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          border-color: ${colors.magenta500};
        }
      }
    }

    .publication__link {
      width: 100%;
      display: inline-flex;
      align-items: center;
      font-weight: 600;
      text-align: right;

      ${breakpoint.medium`
        width: auto;
      `}

      svg {
        margin-left: 8px;
      }
    }
  }
`

const PublicationCard = (props) => (
  <StyledPublicationCard className="bg--white color--black" href={props.link} target="_blank" rel="noopener noreferrer">
    <div className="publication__info color--blue500">
      <p>
        <span>{props.year}</span>
        <span>{props.method}</span>
        <span>{props.journal}</span>
      </p>
    </div>

    <h4 className="publication__title color--blue500">{props.title}</h4>

    <p className="publication__authors">{props.authors}</p>

    <div className="card__footer">
      <div className="publication__tags color--blue300">
        {props.tags.map((tag) => (
          <Link to={getSlug(tag)} className="tag color-hover--magenta500">
            {tag}
          </Link>
        ))}
      </div>

      <Link to={props.link} className="publication__link color--magenta300">
        Open publication <ExternalLink />
      </Link>
    </div>
  </StyledPublicationCard>
)

PublicationCard.propTypes = {
  method: PropTypes.string,
  journal: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.string,
  internalAuthors: PropTypes.object,
  year: PropTypes.string,
  tags: PropTypes.array,
  link: PropTypes.string
}

export default PublicationCard
