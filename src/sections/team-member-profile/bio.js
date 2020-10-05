import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// Utils
import breakpoint from 'utils/breakpoints/'
import { colors } from 'utils/variables/'

// Components
import { Link } from 'gatsby'
import Container from 'components/container/'

// Icons
import IconEmail from 'assets/icons/icon-envelope.inline.svg'
import IconGoogleScholar from 'assets/icons/icon-google-scholar.inline.svg'
import IconTwitter from 'assets/icons/icon-twitter.inline.svg'
import IconLinkedIn from 'assets/icons/icon-linkedin.inline.svg'

const StyledBio = styled.section`
  margin-top: -384px;
  margin-bottom: 64px;

  ${breakpoint.medium`
    margin-top: -264px;
  `}

  ${Container} {
    max-width: 928px;
  }

  .breadcrumb {
    margin-bottom: 40px;

    ${breakpoint.medium`
      margin-bottom: 32px;
    `}
  }

  .bio {
    display: flex;
    flex-wrap: wrap;

    .bio__name {
      width: 100%;
      margin-bottom: 32px;
      color: ${colors.white};

      ${breakpoint.medium`
        width: calc(100% - 352px - 32px);
        order: 1;
      `}

      .department {
        margin-bottom: 8px;
        text-transform: uppercase;

        ${breakpoint.medium`
          margin-bottom: 16px;
        `}
      }

      .name {
        ${breakpoint.medium`
          min-height: 156px;
          margin-bottom: 52px;
        `}
      }

      h2 {
        margin-bottom: 4px;
      }

      h5 {
        font-weight: 400;
      }
    }

    .bio__profile-picture {
      width: 100%;
      margin-bottom: 40px;

      ${breakpoint.medium`
        width: 352px;
        order: 0;
        margin: 0 32px 0 0;
      `}

      .profile-picture {
        width: 100%;
        height: 408px;

        ${breakpoint.medium`
          height: 440px;
        `}
      }

      .info {
        display: flex;
        flex-wrap: wrap;
        padding: 40px 24px;

        a {
          width: 100%;
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          font-weight: 500;

          &:last-child {
            margin-bottom: 0;
          }

          &.email {
            margin-bottom: 40px;
          }

          svg {
            margin-right: 8px;
          }
        }
      }
    }

    .bio__content {
      &.mobile {
        ${breakpoint.medium`
          display: none;
        `}
      }

      &.desktop {
        display: none;

        ${breakpoint.medium`
          display: block;
        `}
      }
    }
  }
`

const Bio = (props) => {
  const data = props.data.contentfulTeamMembers
  const name = data.name
  const departments = data.department
  const position = data.position
  const bio = data.bio.json
  const profilePicture = data.profilePicture
  const email = data.email
  const googleScholar = data.googleScholarProfile
  const twitter = data.twitterProfile
  const linkedIn = data.linkedInProfile

  const placeholderProfilePicture = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "team/profile-picture-placeholder.png" }) {
        childImageSharp {
          fluid(maxWidth: 352, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <StyledBio>
      <Container>
        <p className="breadcrumb color--white">
          <Link to="/team">Team / </Link>
          Team Members
        </p>
        <div className="bio">
          <div className="bio__name">
            <p className="department">
              {departments &&
                departments.map((department, index) => {
                  if (index !== departments.length - 1) {
                    return department + ' | '
                  } else {
                    return department
                  }
                })}
            </p>
            <div className="name">
              <h2 className="font-weight--600">{name}</h2>
              <h5>{position}</h5>
            </div>

            <div className="bio__content desktop color--black">
              <p className="title--underlined color--black">Bio</p>
              {documentToReactComponents(bio)}
            </div>
          </div>

          <div className="bio__profile-picture">
            <BackgroundImage
              fluid={profilePicture ? profilePicture.fluid : placeholderProfilePicture.file.childImageSharp.fluid}
              className="profile-picture"
              style={{
                backgroundSize: 'cover'
              }}
            />
            <div className="info bg--blue100">
              {email && (
                <a href={'mailto:' + email} className="email olor--blue900" target="_blank" rel="noopener noreferrer">
                  <IconEmail />
                  {email}
                </a>
              )}

              {googleScholar && (
                <a href={googleScholar} target="_blank" rel="noopener noreferrer">
                  <IconGoogleScholar />
                  Google Scholar
                </a>
              )}

              {twitter && (
                <a href={twitter} target="_blank" rel="noopener noreferrer">
                  <IconTwitter />
                  Twitter
                </a>
              )}

              {linkedIn && (
                <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                  <IconLinkedIn />
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          <div className="bio__content mobile">
            <p className="title--underlined color--black">Bio</p>
            {documentToReactComponents(bio)}
          </div>
        </div>
      </Container>
    </StyledBio>
  )
}

export default Bio
