import React, { useState } from 'react'

// Libraries
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'
import { colors } from 'utils/variables/'
import { getSlug, useToggle } from 'utils/functions/'

// Components
import Container from 'components/container/'
import { Link } from 'gatsby'

// Icons
import Logo from 'assets/icons/icon-logo.inline.svg'
import IconArrowLeft from 'assets/icons/icon-arrow-left.inline.svg'

const StyledMenu = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 24px 0;
  background-color: ${colors.white};
  box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.08);
  z-index: 9998;

  ul {
    list-style: none;
  }

  ${Container} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .menu__logo {
    max-width: 152px;
    display: flex;
    align-items: flex-start;
  }

  .menu__toggler {
    width: 22px;
    display: flex;
    flex-wrap: wrap;

    span {
      width: 100%;
      height: 3px;
      position: relative;
      margin-bottom: 2px;

      &:first-child {
        top: ${(props) => (props.isMenuOpen ? '5px' : null)};
        transform: ${(props) => (props.isMenuOpen ? 'rotate(45deg)' : null)};
      }

      &:nth-child(2) {
        opacity: ${(props) => (props.isMenuOpen ? '0' : '1')};
      }

      &:last-child {
        top: ${(props) => (props.isMenuOpen ? '-5px' : null)};
        transform: ${(props) => (props.isMenuOpen ? 'rotate(-45deg)' : null)};
        margin-bottom: 0;
      }
    }
  }

  .menu__content {
    width: 100%;
    height: calc(100vh - 78px);
    max-height: ${(props) => (props.isMenuOpen ? '1000px' : '0')}; // This animates the dropdown's height.
    position: relative;
    padding-top: ${(props) => (props.isMenuOpen ? '16px' : '0')};
    transition: all 0.6s ease;
    overflow: hidden;

    > ul {
      li {
        width: 100%;
        padding: 16px 0;
        border-top: 1px solid ${colors.grey300};

        &:last-child {
          border-bottom: 1px solid ${colors.grey300};
        }

        a,
        button {
          font-size: 20px;
          font-weight: 600;
        }
      }
    }

    .menu__has-submenu {
    }

    .submenu {
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: ${(props) => (props.isSubMenuOpen ? '0' : '120%')};
      padding-top: 24px;
      padding-left: 48px;
      background-color: ${colors.white};
      transition: all 0.3s ease;

      .submenu__closer {
        position: relative;
        margin-bottom: 24px;
        font-size: 20px;
        font-weight: 600;

        svg {
          position: absolute;
          top: 3px;
          left: -48px;
        }
      }

      ul {
        margin-bottom: 32px;

        &:last-child {
          margin-bottom: 0;
        }

        p {
          margin-bottom: 8px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }

        li {
          padding: 8px 0;
        }

        a {
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }
`

const Menu = () => {
  const [isMenuOpen, toggleMenu] = useToggle()
  const [isSubMenuOpen, toggleSubMenu] = useToggle()

  const data = useStaticQuery(graphql`
    query {
      researchProjects: allContentfulResearchProjects {
        nodes {
          id
          title
        }
      }
      labs: allContentfulLabs {
        nodes {
          id
          name
        }
      }
    }
  `)
  return (
    <StyledMenu isMenuOpen={isMenuOpen} isSubMenuOpen={isSubMenuOpen}>
      <Container>
        <div className="menu__logo">
          <Link to="/" aria-label="HPI·MS">
            <Logo />
          </Link>
        </div>

        <button type="button" className="menu__toggler" onClick={() => toggleMenu()}>
          <span className="bg--blue500"></span>
          <span className="bg--blue500"></span>
          <span className="bg--blue500"></span>
        </button>

        <div className="menu__content">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li className="menu__has-submenu">
              <button type="button" onClick={() => toggleSubMenu()}>
                Research
              </button>

              <div className="submenu">
                <h5>
                  <button type="button" className="submenu__closer" onClick={() => toggleSubMenu()}>
                    <IconArrowLeft />
                    Research
                  </button>
                </h5>
                <ul>
                  <p className="paragraph-small color--grey700">Core Research Projects</p>
                  {data.researchProjects.nodes.map((project) => (
                    <li key={project.id}>
                      <Link to={'/research-projects/' + getSlug(project.title)}>{project.title}</Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  <p className="paragraph-small color--grey700">Our Labs</p>
                  {data.labs.nodes.map((lab) => (
                    <li key={lab.id}>
                      <Link to={'/labs/' + getSlug(lab.name)}>{lab.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <Link to="/publications">Publications</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>
      </Container>
    </StyledMenu>
  )
}

export default Menu
