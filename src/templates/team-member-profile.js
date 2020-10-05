import React from 'react'

// Libraries
import { graphql } from 'gatsby'

// Components
import SEO from 'components/seo/'

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
        headOfTheLab {
          profilePicture {
            fixed(width: 64, quality: 100) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
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
      <SEO title={props.data.contentfulTeamMembers.name + ' | Hasso Plattner Institute for Digital Health at Mount Sinai'} />
      <Hero />
      <Bio data={props.data} />
      <References data={props.data} />
    </React.Fragment>
  )
}

export default TeamMemberProfile
