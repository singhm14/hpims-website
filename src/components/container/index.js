// Libraries
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;

  ${breakpoint.small`
    padding: 0 48px;
  `}

  ${breakpoint.large`
    padding: 0;
  `}
`

export default Container
