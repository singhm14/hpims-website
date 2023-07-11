import React from "react";

// Libraries
import styled from "styled-components";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";

// Utils
import { colors } from "utils/variables/";

// Hooks
// import useContentfulImage from "hooks/useContentfulImage/"

const StyledContent = styled.section`
  display: block;
  color: ${colors.black};

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
`;

const Content = (props) => {
  const content = props.data.contentfulResearchProjects.description;

  // Render options for images
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        console.log("IIIIMAAAAGEEE", node);
        const {
          data: { target },
        } = node;

        switch (target.__typename) {
          case "ContentfulAsset":
            return (
              <div className="content__image">
                <GatsbyImage image={target.gatsbyImageData} alt="" />
              </div>
            );

          default:
            break;
        }
      },
      [INLINES.HYPERLINK]: (node) => {
        if (
          node.data.uri.indexOf("youtube.com") > -1 ||
          node.data.uri.indexOf("vimeo.com") > -1
        ) {
          if (node.data.uri.indexOf("youtube.com") > -1) {
            const videoID = node.data.uri.split(
              "https://www.youtube.com/watch?v="
            )[1];
            return (
              <div className="video-wrapper">
                <iframe
                  title="HPI·MS"
                  src={"https://www.youtube.com/embed/" + videoID}
                  frameBorder="0"
                  allowFullScreen></iframe>
              </div>
            );
          } else {
            return (
              <div className="video-wrapper">
                <iframe
                  title="HPI·MS"
                  src={node.data.uri}
                  frameBorder="0"
                  allowFullScreen></iframe>
              </div>
            );
          }
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

  return (
    <StyledContent>
      <p>{content && renderRichText(content, options)}</p>
    </StyledContent>
  );
};

export default Content;
