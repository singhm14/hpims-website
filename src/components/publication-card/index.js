import React from 'react'

// Libraries
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// Utils
import breakpoint from 'utils/breakpoints/'

const StyledPublicationCard = styled.div`
  padding: 32px 16px;

  ${breakpoint.small`
    padding: 32px;
  `}

  .publication__info {
  }

  .publication__title {
    margin: 20px 0;
  }

  .card__footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${breakpoint.medium`
      flex-wrap: no-wrap;
    `}

    .tags {
      width: 100%;
      margin-bottom: 16px;

      ${breakpoint.medium`
        width: auto;
      `}
    }

    .link {
      width: 100%;
      text-align: right;

      ${breakpoint.medium`
        width: auto;
      `}
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
          <span>{this.props.journal}</span>
        </p>
      </div>

      <h3 className="publication__title">{this.props.title}</h3>

      <p className="publication__authors">{this.props.authors}</p>
      <p className="publication__year">{this.props.year}</p>

      <div className="card__footer">
        <div className="publication__tags">
          {this.props.tags.map((tag) => (
            <Link to={this.transformTagToSlug(tag)} className="tag">
              {tag}
            </Link>
          ))}
        </div>
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
