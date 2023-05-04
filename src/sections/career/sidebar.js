import React from "react";

// Libraries
import styled from "styled-components";
import { renderRichText } from "gatsby-source-contentful/rich-text";

// Icons
import IconEnvelope from "assets/icons/icon-envelope.inline.svg";
import IconTwitter from "assets/icons/icon-twitter.inline.svg";
import IconFacebook from "assets/icons/icon-facebook.inline.svg";
import IconLinkedIn from "assets/icons/icon-linkedin.inline.svg";
import IconDownload from "assets/icons/icon-download.inline.svg";

const StyledSidebar = styled.div`
  .sidebar__content {
    padding: 24px;
  }

  .title--underlined {
    text-transform: initial;
  }

  ul,
  ol {
    padding-left: 16px;
    margin: 0.5em 0;

    &.list-style--none {
      padding: 0;
      list-style-type: none;
    }
  }

  .sidebar__social {
    ul {
      li {
        margin-bottom: 12px;
      }

      a {
        display: flex;
        align-items: center;

        svg {
          margin-right: 8px;
        }
      }
    }

    .social__download-button {
      width: 100%;
      display: inline-block;
      padding: 12px 24px;
      margin-top: 12px;
      text-align: center;

      svg {
        margin-left: 4px;

        * {
          transition: all 0.3s ease;
        }
      }

      &:hover {
        svg {
          * {
            stroke: #fff;
          }
        }
      }
    }
  }
`;

const Sidebar = (props) => {
  const {
    slug,
    jobSummary: { jobSummary: summary },
    applicationInstructions: instructions,
    jobPostPdf: pdf,
  } = props.data;

  return (
    <StyledSidebar>
      <div className="sidebar__content bg--blue100 color--black">
        <p className="title--underlined paragraph--small">
          Requirements Summary
        </p>
        <p className="paragraph--small">{summary}</p>
        <br />
        <p className="title--underlined paragraph--small">Apply Now</p>

        <p className="paragraph--small ejemplo">
          {renderRichText(instructions)}
        </p>

        <br />
        <div className="sidebar__social">
          <p className="title--underlined paragraph--small">Share Job Offer</p>
          <ul className="list-style--none">
            <li>
              <a href="mailto:" target="_blank" rel="noopener noreferrer">
                <IconEnvelope />
                Email
              </a>
            </li>
            <li>
              <a
                href={
                  "https://twitter.com/intent/tweet?url=https://hpims.org/careers/" +
                  slug +
                  "&text=Check%20out%20this%20job%20offer%20from%20HPI%C2%B7MS"
                }
                target="_blank"
                rel="noopener noreferrer">
                <IconTwitter />
                Twitter
              </a>
            </li>
            <li>
              <a
                href={
                  "https://www.facebook.com/sharer/sharer.php?u=https://hpims.org/careers/" +
                  slug
                }
                target="_blank"
                rel="noopener noreferrer">
                <IconFacebook />
                Facebook
              </a>
            </li>
            <li>
              <a
                href={
                  "https://www.linkedin.com/shareArticle?mini=true&url=https://hpims.org/careers/" +
                  slug
                }
                target="_blank"
                rel="noopener noreferrer">
                <IconLinkedIn />
                LinkedIn
              </a>
            </li>
          </ul>

          {pdf && (
            <a
              href={"https:" + pdf.file.url}
              className="social__download-button bg-hover--blue500 border--blue500 color--blue500 color-hover--white font-weight--600"
              target="_blank"
              rel="noopener noreferrer">
              Download PDF
              <IconDownload />
            </a>
          )}
        </div>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
