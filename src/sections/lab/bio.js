import React from 'react'

// Libraries
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

// Utils
import breakpoint from 'utils/breakpoints/'
import { colors } from 'utils/variables/'

// Components
import { Link } from 'gatsby'
import Container from 'components/container/'

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
  }

  .bio__name {
    width: 100%;
    margin-bottom: 32px;
    color: ${colors.white};

    ${breakpoint.medium`
      width: calc(100% - 352px - 32px);
    `}

    .name {
      max-width: 449px;

      ${breakpoint.medium`
        min-height: 156px;
        margin-bottom: 52px;
      `}
    }

    h2 {
      margin-bottom: 4px;
    }
  }

  .bio__profile-picture {
    width: 100%;
    margin-bottom: 40px;

    ${breakpoint.medium`
      width: 352px;
      margin: 0 0 0 32px;
    `}

    .profile-picture {
      width: 100%;
      height: 408px;

      ${breakpoint.medium`
        height: 440px;
      `}
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
        padding-top: 40px;
      `}
    }
  }
`

const Bio = props => {
  const name = props.data.contentfulLabs.title
  const profilePicture = props.data.contentfulLabs.headOfTheLab.profilePicture.fluid
  const bio = props.data.contentfulLabs.summary.summary

  return (
    <StyledBio>
      <Container>
        <p className="breadcrumb color--grey900 font-weight--600">
          <Link to="/research">Research / </Link>
          Labs
        </p>
        <div className="bio">
          <div className="bio__name">
            <div className="name">
              <h2 className="color--blue500 font-weight--600">{name}</h2>
            </div>

            <div className="bio__content desktop color--black">
              {bio && <p className="paragraph--large">{bio}</p>}
            </div>
          </div>

          <div className="bio__profile-picture">
            <BackgroundImage
              className="profile-picture"
              fluid={profilePicture}
              style={{
                backgroundSize: 'cover'
              }}
            />
          </div>

          <div className="bio__content mobile color--black">
            {bio && <p className="paragraph--large">{bio}</p>}
          </div>
        </div>
      </Container>
    </StyledBio>
  )
}

export default Bio