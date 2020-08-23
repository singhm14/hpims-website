// Libraries
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'

// Icons
import HassoPlatner from 'assets/icons/logo-hasso-plattner-institut.inline.svg'
import MountSinai from 'assets/icons/logo-mount-sinai.inline.svg'

const StyledFooter = styled.footer`
  width: 100%;
  padding: 40px 0;

  ${breakpoint.medium`
    padding: 80px 0;
  `}

  ${Container} {
    ${breakpoint.medium`
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    `}
  }

  ul {
    margin-bottom: 40px;

    ${breakpoint.medium`
      display: flex;
      margin-bottom: 0;
    `}

    li {
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }

      ${breakpoint.medium`
        margin: 0 8px 0 0;
      `}

      ${breakpoint.large`
        margin-right: 32px;
      `}
    }
  }

  .footer__logos {
    ${breakpoint.medium`
      text-align: right;
    `}

    .logos {
      margin-bottom: 24px;
    }

    svg {
      margin-right: 24px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`

const Footer = () => (
  <StyledFooter className="bg--grey100">
    <Container>
      <ul>
        <li>
          <Link to="/" className="color--black color-hover--magenta900" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="color--black color-hover--magenta900" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/team" className="color--black color-hover--magenta900" activeClassName="active">
            Team
          </Link>
        </li>
        <li>
          <Link to="/research" className="color--black color-hover--magenta900" activeClassName="active">
            Research
          </Link>
        </li>
        <li>
          <Link to="/publications" className="color--black color-hover--magenta900" activeClassName="active">
            Publications
          </Link>
        </li>
        <li>
          <Link to="/careers" className="color--black color-hover--magenta900" activeClassName="active">
            Careers
          </Link>
        </li>
      </ul>

      <div className="footer__logos">
        <div className="logos">
          <HassoPlatner />
          <MountSinai />
        </div>
        <p className="color--grey900">© 2020 Hasso Plattner Institute for Digital Health at Mount Sinai</p>
      </div>
    </Container>
  </StyledFooter>
)

export default Footer
