import React from 'react'

// Libraries
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

// Utils
import { colors } from 'utils/variables/'
import { useToggle } from 'utils/functions/'

// Components
import BackgroundImage from 'gatsby-background-image'
import { ExternalLink } from 'components/buttons/'

const StyledPublicationCard = styled.div`
  width: 100%;
  padding: 24px 16px;
  background-color: ${colors.white};
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));

  .publication__info {
    .title {
      margin-bottom: 4px;
      font-weight: 600;
      letter-spacing: 0.1px;
    }

    .publication__date {
      margin-bottom: 4px;
      color: ${colors.grey700};
    }

    .publication__title {
      display: flex;
      margin-bottom: 16px;
      font-weight: 600;
    }

    .info {
      border-top: 1px solid ${colors.grey300};
      padding: 16px 0;

      &.info--journal {
        display: flex;
        align-items: center;
        padding-top: 0;
        border: 0;

        p:first-child {
          margin-right: 4px;
        }
      }

      &.info--authors {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        border-bottom: 1px solid ${colors.grey300};

        button {
          font-size: 16px;
          font-weight: 600;
          border-bottom: 2px solid ${colors.blue300};
          white-space: nowrap;
        }

        .authors__internal {
          width: calc(100% - 68px);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          font-size: 14px;

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

              &:nth-child(n + 15) {
                display: ${props => props.active ? 'flex' : 'none'};
              }

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
          font-size: 14px;
          line-height: 20px;
        }
      }

      &.info--tags {
        padding-bottom: 16px;

        .tag {
          display: inline-block;
          padding: 4px 12px;
          margin: 0 8px 8px 0;
          background-color: ${colors.blue100};
          color: ${colors.blue900};
          font-size: 14px;
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
    justify-content: flex-end;

    .journal {
      display: none;

      > p:first-child {
        margin-bottom: 4px;
      }
    }

    .link {
      width: auto;
      display: inline-flex;
      padding: 0;
      border: 0;
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
        <p className="publication__date paragraph--small color--grey900">{props.year}</p>
        <p className="publication__title font-weight--600">
          <a href={props.link} className="color--blue900 color-hover--blue300" target="_blank" rel="noopener noreferrer">
            {props.title}
          </a>
        </p>

        <div className="info info--journal color--grey900">
          <p className="journal paragraph--small">Journal | </p>
          <p className="journal-title paragraph--small font-weight--500"> {props.journal}</p>
        </div>

        <div className="info info--authors">
          <div className="authors__internal">
            <div className="authors color--black">
              <p className="title color--black paragraph--small">HPI·MS Authors</p>
              {props.internalAuthors &&
                props.internalAuthors.map((author) => (
                  <div className="author" key={author.id}>
                    <BackgroundImage className="author__profile-picture" fixed={author.profilePicture ? author.profilePicture.fixed : data.file.childImageSharp.fixed} style={{ width: '24px', height: '24px', backgroundSize: 'cover', borderRadius: '50%', overflow: 'hidden' }} />
                    <p className="author__name paragraph--small">{author.name}</p>
                  </div>
                ))}

              <p className="count paragraph--small">{props.internalAuthors && props.internalAuthors.length} HPI•MS authors</p>
            </div>

            <div className="authors__full-list">
              <p className="title paragraph--small color--black">Full list of authors</p>
              <p className="paragraph--small color--black">{props.authors}</p>
            </div>
          </div>

          <div>
            <button type="button" className="color--blue300" onClick={toggleAuthors}>
              {active ? 'View less' : 'View all'}
            </button>
          </div>
        </div>
      </div>
      <div className="publication__actions">
        <div className="journal">
          <p className="paragraph--extra-small color--grey900 font-weight--500">{props.method}</p>
          <p className="color--blue500">{props.journal}</p>
        </div>

        <ExternalLink href={props.link} className="link color--blue500 color-hover--blue300 border--blue500 svg--stroke-blue500 svg-hover--stroke-blue300" text="Open Publication" />
      </div>
    </StyledPublicationCard>
  )
}

export default PublicationCard
