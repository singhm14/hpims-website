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

  .email {
    margin-bottom: 24px;

    ${breakpoint.medium`
      margin-bottom: 0;
    `}

    p {
      margin-bottom: 8px;
      text-transform: uppercase;
    }

    h4 {
      font-weight: 400;
    }
  }

  ul {
    display: flex;
    margin-bottom: 40px;
    list-style: none;

    ${breakpoint.medium`
      margin-bottom: 0;
    `}

    .column {
      margin-right: 32px;

      &:last-child {
        margin-right: 0;
      }

      ${breakpoint.small`
        margin-right: 64px;
      `}

      ${breakpoint.medium`
        margin-right: 152px;
      `}
    }

    li {
      margin-bottom: 12px;
      font-size: 14px;

      &:last-child {
        margin-bottom: 0;
      }

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
      width: auto;
      height: 52px;
      margin-bottom: 24px;
    }

    svg {
      filter: grayscale(100%);
      opacity: 0.5;
      transition: all 0.3s;

      &:hover {
        filter: grayscale(0);
        opacity: 1;
      }
    }

    p {
      font-weight: 500;
    }
  }
`

const Footer = () => (
  <StyledFooter className="bg--grey100 color--white">
    <Container>
      <div className="footer__sitemap">
        <div className="email">
          <p className="paragraph--small color--blue500">Contact Us</p>
          <h4>
            <a href="mailto:hpimsinfo@mssm.edu" className="color--blue300 color-hover--magenta300">
              HPIMSinfo@mssm.edu
            </a>
          </h4>
        </div>
        {/* <ul>
          <div className="column">
            <li>
              <Link to="/" className="color--blue500 color-hover--magenta300" activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="color--blue500 color-hover--magenta300" activeClassName="active">
                About
              </Link>
            </li>
            <li>
              <Link to="/team" className="color--blue500 color-hover--magenta300" activeClassName="active">
                Team
              </Link>
            </li>
          </div>
          <div className="column">
            <li>
              <Link to="/research" className="color--blue500 color-hover--magenta300" activeClassName="active">
                Research
              </Link>
            </li>
            <li>
              <Link to="/publications" className="color--blue500 color-hover--magenta300" activeClassName="active">
                Publications
              </Link>
            </li>
            <li>
              <Link to="/careers" className="color--blue500 color-hover--magenta300" activeClassName="active">
                Careers
              </Link>
            </li>
          </div>
        </ul> */}
      </div>

      <div className="footer__logos">
        <div className="logos">
          <a href="https://hpi.de/en/index.html" target="_blank" rel="noopener noreferrer" title="Hasso Plattnet Institut">
            <HassoPlatner />
          </a>
          <a href="https://www.mountsinai.org/" target="_blank" rel="noopener noreferrer" title="Mount Sinai">
            <MountSinai />
          </a>
        </div>
        <p className="color--grey500 paragraph--extra-small">© 2020 Hasso Plattner Institute for Digital Health at Mount Sinai</p>
      </div>
    </Container>
  </StyledFooter>
)

export default Footer
