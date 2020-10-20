import React from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'
import { colors } from 'utils/variables/'

// Components
import Grid from 'components/grid/'

const StyledStudents = styled.section`
  padding-top: 32px;

  ${breakpoint.medium`
    padding-top: 96px;
  `}

  .students__title {
    margin-bottom: 40px;
  }

  .institute {
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }

    ${breakpoint.medium`
      margin-bottom: 56px;
    `}

    .institute__title {
      padding-bottom: 16px;
      margin-bottom: 16px;
      border-bottom: 2px solid ${colors.grey300};

      ${breakpoint.medium`
        padding-bottom: 8px;
      `}
    }
  }
`

const Students = () => {
  const data = useStaticQuery(graphql`
    query {
      icahnStudents: allContentfulStudents(filter: { institute: { eq: "Icahn School of Medicine at Mount Sinai" } }) {
        nodes {
          name
          type
        }
      }
      hassoStudents: allContentfulStudents(filter: { institute: { eq: "Hasso Plattner Institute Digital Engineering, University Potsdam" } }) {
        nodes {
          name
          type
        }
      }
    }
  `)

  return (
    <StyledStudents id="teamStudents">
      <h4 className="students__title color--blue500 font-weight--600">Students</h4>

      <div className="institute">
        <h5 className="institute__title color--blue500 font-weight--600">Icahn School of Medicine at Mount Sinai</h5>
        <Grid gutter="16" columns="2">
          {data.icahnStudents.nodes.map((student) => (
            <div className="grid__item">
              <p>
                <span className="font-weight--500">{student.name} | </span>
                {student.type}
              </p>
            </div>
          ))}
        </Grid>
      </div>

      <div className="institute">
        <h5 className="institute__title color--blue500 font-weight--600">Hasso Plattner Institute Digital Engineering, University Potsdam</h5>
        <Grid gutter="16" columns="2">
          {data.hassoStudents.nodes.map((student) => (
            <div className="grid__item">
              <p>
                <span className="font-weight--500">{student.name} | </span>
                {student.type}
              </p>
            </div>
          ))}
        </Grid>
      </div>
    </StyledStudents>
  )
}

export default Students
