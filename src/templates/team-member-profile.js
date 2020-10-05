import React from 'react'

// Utils
import { graphql } from 'gatsby'

// Sections
import Hero from 'sections/team-member-profile/hero'
import Bio from 'sections/team-member-profile/bio'
import References from 'sections/team-member-profile/references'

export const query = graphql`
  query($id: String!) {
    contentfulTeamMembers(id: { eq: $id }) {
      profilePicture {
        fluid(maxWidth: 352, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      name
      department
      position
      bio {
        json
      }
      email
      googleScholarProfile
      twitterProfile
      linkedInProfile
      labs {
        name
      }
      research_projects {
        icon {
          fixed(width: 56, quality: 100) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
        title
      }
      publications {
        method
        journal
        title
        authors {
          authors
        }
        internalAuthors {
          ... on ContentfulTeamMembers {
            id
            name
            profilePicture {
              fixed(width: 24, quality: 100) {
                ...GatsbyContentfulFixed_withWebp
              }
            }
          }
          ... on ContentfulStudents {
            id
            name
          }
        }
        year(formatString: "MMMM, YYYY")
        tags
        link
      }
    }
  }
`

const TeamMemberProfile = (props) => {
  return (
    <React.Fragment>
      <Hero />
      <Bio data={props.data} />
      <References data={props.data} />
    </React.Fragment>
  )
}

export default TeamMemberProfile
