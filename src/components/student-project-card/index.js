import React from 'react'

// Libraries
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Link } from 'gatsby'

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

      &::after {
        content: '+';
        position: relative;
        top: -2px;
        margin-left: 8px;
        color: ${colors.blue300};
        font-size: 20px;
      }
    }
  }
`

const StudentProject = (props) => {
  const supervisors = props.supervisors.filter((supervisor) => supervisor.__typename === 'ContentfulTeamMembers')

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
                  <Link className="supervisor color-hover--blue300 font-weight--500" to={'/team/' + getSlug(supervisor.name)} key={supervisor.id}>
                    <p className="paragraph--small">{supervisor.name}</p>
                  </Link>
                )
            )}
            {props.nonAffiliatedSupervisors && props.nonAffiliatedSupervisors.map(supervisor => 
              <p className="paragraph--small font-weight--500" style={{marginBottom: '4px'}}>{supervisor}</p>  
            )}
          </div>
        )}

        {props.students && (
          <div className="students">
            <p className="title paragraph--small color--black font-weight--600">Students</p>
            <p className="paragraph--small color--black">
              {props.students.students}
            </p>
          </div>
        )}
      </div>
    </StyledStudentProject>
  )
}

export default StudentProject
