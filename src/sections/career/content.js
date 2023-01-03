import React from "react";

// Libraries
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Utils
import breakpoint from "utils/breakpoints/";

const StyledContent = styled.div`
  width: 100%;

  h4 {
    margin-top: 56px;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;

    ${breakpoint.medium`
      font-size: 22px;
    `}

    &:first-of-type {
      margin-top: 0;
    }

    & + p {
      margin-top: 0;
    }
  }

  p {
    margin: 1em 0;
  }

  ul,
  ol {
    margin: 1em 0;
    padding-left: 20px;

    li {
      margin-bottom: 1em;

      &:last-child {
        margin: 0;
      }
    }
  }
`;

const Content = (props) => {
  const { jobDetails: content } = props.data;
  return (
    <StyledContent>
      {content && documentToReactComponents(content.raw)}
    </StyledContent>
  );
};

export default Content;
