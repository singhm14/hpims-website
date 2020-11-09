// Utils
import breakpoint from 'utils/breakpoints/'

// Libraries
import styled, { css } from 'styled-components'

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .grid__item {
    width: 100%;
    margin-bottom: ${(props) => props.gutter + 'px'};

    &:last-child {
      margin-bottom: 0;
    }

    ${(props) =>
      props.columns !== '1'
        ? css`
            ${breakpoint.small`
              width: calc((100% - ${(props) => props.gutter}px) / 2);
              margin-right: ${(props) => props.gutter}px;

              @media screen and (max-width: 1024px) {
                &:nth-child(2n) {
                  margin-right: 0;
                }
              }

              &:nth-last-child(-n + 2) {
                margin-bottom: 0;
              }
            `}

            ${breakpoint.medium`
              width: calc((100% - (${(props) => props.gutter}px * (${(props) => props.columns} - 1))) / ${(props) => props.columns});

              &:nth-child(${(props) => props.columns}n) {
                margin-right: 0;
              }

              &:nth-last-child(-n + ${(props) => props.columns}) {
                margin-bottom: 0;
              }
            `}
          `
        : null}
  }
`

export default Grid
