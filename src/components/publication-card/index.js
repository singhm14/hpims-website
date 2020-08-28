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

  ${breakpoint.small`
    padding: 32px;
  `}

  .publication__info {
    font-size: 14px;
    text-transform: uppercase;

    .publication__journal {
      font-weight: 600;

      &::before {
        content: '|';
        margin: 0 6px;
      }
    }
  }

  .publication__title {
    margin: 20px 0;
  }

  .card__footer {
    display: flex;
    flex-wrap: wrap;
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
      `}

      .tag {
        margin-right: 16px;
        border-bottom: 1px solid ${colors.grey500};

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
        margin-left: 12px;
      }
    }
  }
`

const PublicationCard = (props) => (
  <StyledPublicationCard className="bg--grey100 color--black" href={props.link} target="_blank" rel="noopener noreferrer">
    <div className="publication__info color--grey900">
      <p>
        <span>{props.method}</span>
        <span className="publication__journal">{props.journal}</span>
      </p>
    </div>

    <h3 className="publication__title">{props.title}</h3>

    <p className="publication__authors">{props.authors}</p>
    <p className="publication__year">{props.year}</p>

    <div className="card__footer">
      <div className="publication__tags color--grey900">
        {props.tags.map((tag) => (
          <Link to={getSlug(tag)} className="tag color-hover--magenta500">
            {tag}
          </Link>
        ))}
      </div>

      <Link to={props.link} className="publication__link color--grey900">
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
