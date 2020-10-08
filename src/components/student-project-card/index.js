import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

// Utils
import breakpoint from 'utils/breakpoints/'
import { colors } from 'utils/variables/'
import { getSlug } from 'utils/functions/'

const StyledStudentProject = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.08);

  ${breakpoint.medium`
    flex-wrap: nowrap;
  `}

  .project__content {
    padding: 24px;

    ${breakpoint.medium`
      width: calc(100% - 256px);
      padding: 32px;
    `}

    .project__status {
      margin-bottom: 8px;
    }

    .project__title {
      margin-bottom: 20px;
    }

    .content {
      padding-top: 20px;
      border-top: 1px solid ${colors.grey300};
    }
  }

  .project__supervisors {
    width: 100%;
    padding: 32px 16px;

    ${breakpoint.medium`
      width: 256px;
      padding: 32px 24px;
    `}

    .supervisors {
      margin-bottom: 16px;
    }

    .supervisor {
      display: flex;
      align-items: center;
      margin-bottom: 4px;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        color: ${colors.blue500};

        .supervisor__image {
          border-color: ${colors.blue500}!important;
        }
      }

      .supervisor__image {
        margin-right: 4px;
        transition: all 0.3s ease;
      }
    }
  }
`

const StudentProject = (props) => {
  const placeholderProfilePicture = useStaticQuery(graphql`
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

  const supervisors = props.supervisors.filter((supervisor) => supervisor.name !== undefined)
  const students = props.students.filter((student) => student.name !== undefined)

  return (
    <StyledStudentProject>
      <div className="project__content">
        <p className="project__status paragraph--small color--grey900 font-weight--500">{props.status} Research Project</p>
        <h5 className="project__title color--blue900 font-weight--600">{props.title}</h5>
        <div className="content">{props.description && documentToReactComponents(props.description.json)}</div>
      </div>
      <div className="project__supervisors bg--blue100">
        {supervisors && (
          <div className="supervisors">
            <p className="title paragraph--small color--black font-weight--600">Supervisors</p>
            {supervisors.map(
              (supervisor) =>
                supervisor.name && (
                  <Link className="supervisor" to={'/team/' + getSlug(supervisor.name)} key={supervisor.id}>
                    <BackgroundImage
                      className="supervisor__image"
                      fixed={supervisor.profilePicture ? supervisor.profilePicture.fixed : placeholderProfilePicture.file.childImageSharp.fixed}
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundSize: 'cover',
                        borderRadius: '50%',
                        border: '2px solid white',
                        overflow: 'hidden'
                      }}
                    />
                    <p className="paragraph--small">{supervisor.name}</p>
                  </Link>
                )
            )}
          </div>
        )}

        {students && (
          <div className="students">
            <p className="title paragraph--small color--black font-weight--600">Students</p>
            <p className="paragraph--small color--black">
              {' '}
              {students.map((student, index) => {
                if (student.name) {
                  if (index !== students.length) {
                    return student.name + ','
                  } else {
                    return student.name
                  }
                } else return null
              })}
            </p>
          </div>
        )}
      </div>
    </StyledStudentProject>
  )
}

export default StudentProject
