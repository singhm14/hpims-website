import React from "react";

// Libraries
import { graphql } from "gatsby";

// Components
import Seo from "components/seo/";

// Sections
import Hero from "sections/team-member-profile/hero";
import Bio from "sections/team-member-profile/bio";
import References from "sections/team-member-profile/references";

export const query = graphql`
  query ($id: String!) {
    contentfulTeamMembers(id: { eq: $id }) {
      profilePicture {
        gatsbyImageData(width: 352, quality: 100)
      }
      name
      department
      position
      bio {
        raw
      }
      email
      googleScholarProfile
      twitterProfile
      linkedInProfile
      labs {
        title
        headOfTheLab {
          profilePicture {
            gatsbyImageData(width: 64, quality: 100)
          }
        }
      }
      research_projects {
        icon {
          gatsbyImageData(width: 56, quality: 100)
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
              gatsbyImageData(width: 24, quality: 100)
            }
          }
          ... on ContentfulStudents {
            id
            name
          }
        }
        yearUnformatted: year
        year(formatString: "MMMM, YYYY")
        tags
        link
      }
      co_innovation_projects {
        title
      }
    }
  }
`;

const TeamMemberProfile = (props) => {
  return (
    <React.Fragment>
      <Seo
        title={
          props.data.contentfulTeamMembers.name +
          " | Hasso Plattner Institute for Digital Health at Mount Sinai"
        }
      />
      <Hero />
      <Bio data={props.data} />
      <References data={props.data} />
    </React.Fragment>
  );
};

export default TeamMemberProfile;
