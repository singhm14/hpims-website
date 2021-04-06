// Libraries
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  position: relative;
  padding: 0 16px;
  margin: 0 auto;
  z-index: 10;

  ${breakpoint.small`
    padding: 0 40px;
  `}

  ${breakpoint.medium`
    padding: 0 80px;
  `}

  ${breakpoint.large`
    padding: 0;
  `}
`

export default Container
