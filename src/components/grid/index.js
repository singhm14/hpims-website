// Utils
import breakpoint from 'utils/breakpoints/'

// Libraries
import styled from 'styled-components'

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .grid__item {
    width: 100%;
    margin-bottom: ${(props) => props.gutter + 'px'};

    &:last-child {
      margin-bottom: 0;
    }

    ${breakpoint.small`
      width: calc((100% - (${(props) => props.gutter}px * (${(props) => props.columns} - 1))) / 2);

      &:nth-last-child(-n + 2) {
        margin-bottom: 0;
      }
    `}
  }
`

export default Grid
