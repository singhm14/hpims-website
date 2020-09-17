import React from 'react'

// Libraries
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

// Utils
import breakpoint from 'utils/breakpoints/'
import { colors } from 'utils/variables/'
import { getSlug, useToggle } from 'utils/functions/'

// Components
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import { ExternalLink } from 'components/buttons/'

const StyledPublicationCard = styled.div`
  padding: 24px 16px;
  background-color: ${colors.white};
  box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.08);

  ${breakpoint.medium`
    padding: 0;
    display: flex;
  `}

  .publication__info {
    ${breakpoint.medium`
      width: calc(100% - 256px);
      padding: 32px 32px 20px 32px;
    `}

    .title {
      margin-bottom: 4px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1px;
    }

    .publication__date {
      margin-bottom: 4px;
      font-weight: 500;
      color: ${colors.grey700};

      ${breakpoint.medium`
        font-size: 14px;
      `}
    }

    .publication__title {
      display: flex;
      margin-bottom: 20px;
      font-weight: 600;
    }

    .info {
      border-top: 1px solid ${colors.grey300};
      padding: 20px 0;

      ${breakpoint.medium`
        padding: 16px 0;
      `}

      &.info--journal {
        ${breakpoint.medium`
          display: none;
        `}
      }

      &.info--authors {
        display: flex;
        justify-content: space-between;

        button {
          font-size: 14px;
          border-bottom: 1px solid ${colors.blue300};
          white-space: nowrap;
        }

        .authors__internal {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .title {
            display: ${(props) => (props.active ? 'block' : 'none')};
          }

          .authors {
            display: flex;
            flex-wrap: wrap;
            align-items: ${(props) => (props.active ? 'flex-start' : 'center')};
            justify-content: space-between;
            margin-bottom: ${(props) => (props.active ? '20px' : '0')};

            .author {
              width: ${(props) => (props.active ? '100%' : 'auto')};
              display: flex;
              align-items: center;
              margin-bottom: ${(props) => (props.active ? '2px' : '0')};

              &:last-child {
                margin-bottom: 0;
              }

              .author__profile-picture {
                width: 24px;
                height: 24px;
                margin-right: ${(props) => (props.active ? '4px' : '-4px')};
                border: 1px solid ${colors.white};
                border-radius: 50% !important;
              }

              .author__name {
                display: ${(props) => (props.active ? 'block' : 'none')};
                font-weight: 500;
              }
            }

            .count {
              display: ${(props) => (props.active ? 'none' : 'block')};
              margin-left: 8px;
              font-weight: 500;
            }
          }
        }

        .authors__full-list {
          width: 100%;
          display: ${(props) => (props.active ? 'block' : 'none')};

          ${breakpoint.medium`
            margin-right: 40px;
          `}
        }
      }

      &.info--tags {
        padding-bottom: 16px;

        ${breakpoint.medium`
          padding-bottom: 0;
        `}

        .tag {
          display: inline-block;
          padding: 4px 12px;
          margin: 0 8px 8px 0;
          background-color: ${colors.blue100};
          color: ${colors.blue500};
          font-size: 12px;
          border-radius: 24px;
          outline: 0;
          transition: all 0.3s;

          &:last-child {
            margin-right: 0;
          }

          &:focus {
            box-shadow: 0 0 0 4px ${colors.blue200};
          }

          &:hover {
            background-color: ${colors.blue500};
            color: ${colors.white};
          }

          &:pressed {
            background-color: ${colors.blue900};
          }
        }
      }
    }
  }

  .publication__actions {
    display: flex;
    flex-wrap: wrap;

    ${breakpoint.medium`
      width: 256px;
      padding: 32px 24px 24px 24px;
      background-color: ${colors.blue100};
    `}

    .journal {
      display: none;

      ${breakpoint.medium`
        display: block;
        font-weight: 600;
      `}
    }

    .link {
      width: 100%;
      align-self: flex-end;
      white-space: nowrap;
    }
  }
`

const PublicationCard = (props) => {
  const [active, toggleAuthors] = useToggle(false)

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "team/profile-picture-placeholder.png" }) {
        childImageSharp {
          fixed(width: 24, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <StyledPublicationCard active={active}>
      <div className="publication__info">
        <p clasName="publication__date paragraph--extra-small color--grey700">{props.year}</p>
        <h5>
          <a href={props.link} className="publication__title color--blue900" target="_blank" rel="noopener noreferrer">
            {props.title}
          </a>
        </h5>

        <div className="info info--journal color--grey900">
          <p className="journal paragraph--extra-small">Journal</p>
          <p className="journal-title paragraph--small font-weight--600">{props.journal}</p>
        </div>

        <div className="info info--authors">
          <div className="authors__internal">
            <div className="authors color--black">
              <p className="title paragraph--extra-small color--black">HPI·MS Authors</p>
              {props.internalAuthors &&
                props.internalAuthors.map((author) => (
                  <div className="author" key={author.id}>
                    <BackgroundImage className="author__profile-picture" fixed={author.profilePicture ? author.profilePicture.fixed : data.file.childImageSharp.fixed} style={{ width: '24px', height: '24px', backgroundSize: 'cover', borderRadius: '50%', overflow: 'hidden' }} />
                    <p className="author__name paragraph--extra-small">{author.name}</p>
                  </div>
                ))}

              <p className="count paragraph--extra-small">{props.internalAuthors && props.internalAuthors.length} HPI•MS authors</p>
            </div>

            <div className="authors__full-list">
              <p className="title paragraph--extra-small color--black">Full List of Authors</p>
              <p className="paragraph--extra-small color--black">{props.authors}</p>
            </div>
          </div>

          <div>
            <button type="button" className="color--blue300" onClick={toggleAuthors}>
              {active ? 'View less' : 'View all'}
            </button>
          </div>
        </div>

        <div className="info info--tags">
          {props.tags &&
            props.tags.map((tag) => (
              <Link to={'/publications?category=' + getSlug(tag)} className="tag color--blue500">
                {tag}
              </Link>
            ))}
        </div>
      </div>
      <div className="publication__actions">
        <div className="journal">
          <p className="paragraph--extra-small color--grey900">Journal</p>
          <p className="color--blue900">{props.journal}</p>
        </div>

        <ExternalLink href={props.link} className="link bg-hover--blue900 color--blue900 color-hover--white border--blue900 svg--stroke-blue900 svg-hover--stroke-white" text="Open Publication" />
      </div>
    </StyledPublicationCard>
  )
}

export default PublicationCard
