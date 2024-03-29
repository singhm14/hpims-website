import React from "react";

// Libraries
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// Utils
import breakpoint from "utils/breakpoints/";
import { colors } from "utils/variables/";
import { getSlug } from "utils/functions/";

// Components
import Container from "components/container/";
import Grid from "components/grid/";
import ReferenceCard from "components/reference-card/";
import { Tertiary } from "components/buttons/";

// Hooks
import useContentfulImage from "hooks/useContentfulImage/";

// Icons
import StudentsProjectsIcon from "assets/icons/icon-students-projects.inline.svg";

const StyledReferences = styled.section`
  padding-bottom: 56px;

  ${breakpoint.medium`
    padding-bottom: 102px;
  `}

  ${Container} {
    max-width: 928px;
  }

  .references {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .sidebar {
      width: 100%;
      margin-bottom: 64px;

      ${breakpoint.medium`
        width: 352px;
      `}

      .sticky {
        ${breakpoint.medium`
          position: sticky;
          top: 104px;
        `}
      }

      .reference {
        margin-bottom: 32px;

        &:last-child {
          margin-bottom: 0;
        }

        .sidebar__team-member {
          display: flex;
          align-items: center;

          &::after {
            content: "+";
            position: relative;
            top: -2px;
            margin-left: 8px;
            color: ${colors.blue300};
            font-size: 24px;
          }
        }
      }
    }

    .content {
      width: 100%;

      ${breakpoint.medium`
        width: calc(100% - 352px - 32px);
      `}

      h3 {
        font-size: 16px;
        line-height: 22px;
        padding-bottom: 8px;
        margin-top: 40px;
        margin-bottom: 16px;
        font-weight: 600;
        text-transform: uppercase;
        border-bottom: 1px solid ${colors.grey500};

        &:first-child {
          margin-top: 0;
        }
      }

      h5 {
        margin-top: 1em;
        font-size: 16px;
        line-height: 22px;

        & + p {
          margin-top: 0;
        }
      }

      p {
        margin: 1em 0;
      }

      ul {
        margin: 1em 0;
        padding-left: 20px;

        li {
          margin-bottom: 1em;

          &:last-child {
            margin: 0;
          }
        }
      }

      .content__image {
        margin: 40px 0;
      }

      .video-wrapper {
        width: 100%;
        position: relative;
        padding-bottom: 56.25%;
        margin: 40px 0;

        iframe {
          width: 100%;
          height: 100%;
          position: absolute;
        }
      }
    }
  }
`;

// Render options for images
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const image = useContentfulImage(
        node.data.target.fields.file["en-US"].url
      );
      return (
        <GatsbyImage
          className="content__image"
          image={getImage(image)}
          title="HPI·MS"
        />
      );
    },
    [INLINES.HYPERLINK]: (node) => {
      if (
        node.data.uri.indexOf("youtube.com") > 0 ||
        node.data.uri.indexOf("vimeo.com") > 0
      ) {
        return (
          <div className="video-wrapper">
            <iframe
              title="HPI·MS"
              src={node.data.uri}
              frameBorder="0"
              allowFullScreen></iframe>
          </div>
        );
      } else {
        return (
          <a
            className="color--blue500 color-hover--blue300"
            href={node.data.uri}
            target="_blank"
            rel="noopener noreferrer">
            {node.content[0].value}
          </a>
        );
      }
    },
  },
};

const References = (props) => {
  const content = props.data.contentfulLabs.description;
  const research_projects = props.data.contentfulLabs.projects;
  const teamMembers = props.data.contentfulLabs.teamMembers;

  return (
    <StyledReferences>
      <Container>
        <div className="references">
          <div className="content">
            <p>{content && renderRichText(content, options)}</p>
          </div>

          <div className="sidebar">
            <div className="sticky">
              {research_projects && (
                <div className="reference">
                  <p className="title--underlined">Projects</p>
                  <Grid gutter="16" columns="1">
                    {research_projects.map((project) => (
                      <div className="grid__item">
                        <ReferenceCard>
                          <GatsbyImage
                            className="card__icon"
                            image={getImage(project.icon.fixed)}
                            styles={{
                              width: "56px",
                              height: "56px",
                            }}
                          />
                          <div className="card__content">
                            <p className="card__title color--blue500 font-weight--600">
                              {project.title}
                            </p>
                            <Tertiary
                              className="color--blue300 font-weight--600"
                              to={
                                "/research-projects/" + getSlug(project.title)
                              }
                              text="View Project"
                            />
                          </div>
                        </ReferenceCard>
                      </div>
                    ))}
                    <div className="grid__item">
                      <ReferenceCard>
                        <StudentsProjectsIcon className="card__icon" />
                        <div className="card__content">
                          <p className="card__title color--blue500 font-weight--600">
                            Co-Innovation Research Exchange
                          </p>
                          <Tertiary
                            className="color--blue300 font-weight--600"
                            to="/research-projects/co-innovation-research-exchange"
                            text="View Project"
                          />
                        </div>
                      </ReferenceCard>
                    </div>
                  </Grid>
                </div>
              )}

              {teamMembers && (
                <div className="reference">
                  <p className="title--underlined">Team</p>
                  <Grid gutter="14" columns="1">
                    {teamMembers.map((member) => (
                      <div className="grid__item">
                        {member.__typename === "ContentfulTeamMembers" ? (
                          <Link
                            className="sidebar__team-member color-hover--blue300 font-weight--500"
                            to={"/team/" + getSlug(member.name)}>
                            {member.name}
                          </Link>
                        ) : (
                          <p className="font-weight--500">{member.name}</p>
                        )}
                      </div>
                    ))}
                  </Grid>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </StyledReferences>
  );
};

export default References;
