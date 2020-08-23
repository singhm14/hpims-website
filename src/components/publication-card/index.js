import React from 'react'

// Libraries
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// Utils
import { colors } from 'utils/variables/'
import breakpoint from 'utils/breakpoints/'

// Icons
import ExternalLink from 'assets/icons/icon-external-link.inline.svg'

const StyledPublicationCard = styled.div`
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

class PublicationCard extends React.Component {
  transformTagToSlug = (tag) => {
    tag = tag.replace(/^\s+|\s+$/g, '')
    tag = tag.toLowerCase()

    // remove accents, swap ñ for n, etc
    var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
    var to = 'aaaaeeeeiiiioooouuuunc------'
    for (var i = 0, l = from.length; i < l; i++) {
      tag = tag.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    tag = tag
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-') // collapse dashes

    return tag
  }

  render = (props) => (
    <StyledPublicationCard className="bg--grey100 color--black">
      <div className="publication__info color--grey900">
        <p>
          <span>{this.props.method}</span>
          <span className="publication__journal">{this.props.journal}</span>
        </p>
      </div>

      <h3 className="publication__title">{this.props.title}</h3>

      <p className="publication__authors">{this.props.authors}</p>
      <p className="publication__year">{this.props.year}</p>

      <div className="card__footer">
        <div className="publication__tags color--grey900">
          {this.props.tags.map((tag) => (
            <Link to={this.transformTagToSlug(tag)} className="tag color-hover--magenta500">
              {tag}
            </Link>
          ))}
        </div>

        <Link to={this.props.link} className="publication__link color--grey900">
          Open publication <ExternalLink />
        </Link>
      </div>
    </StyledPublicationCard>
  )
}

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
