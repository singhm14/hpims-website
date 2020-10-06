import React, { useState, useEffect } from 'react'

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
import IconCaretDown from 'assets/icons/icon-caret-down.inline.svg'
import IconArrowLeft from 'assets/icons/icon-arrow-left.inline.svg'

const StyledMenu = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 8px 0;
  background-color: ${colors.white};
  box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.08);
  transform: ${(props) => (props.hideMenu ? 'translateY(-100%)' : 'translateY(0)')};
  transition: all 0.6s ease;
  z-index: 9998;

  ${breakpoint.small`
    padding: 16px 0;
  `}

  ul {
    list-style: none;
  }

  a,
  button {
    transition: all 0.3s;
    border-bottom: 1px solid transparent;

    &:hover {
      color: ${colors.blue300};

      ${breakpoint.medium`
        color: initial;
        border-color: ${colors.blue300};
      `}
    }
  }

  ${Container} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    ${breakpoint.small`
      flex-wrap: nowrap;
    `}
  }

  .menu__logo {
    max-width: 152px;

    ${breakpoint.small`
      max-width: 180px;
    `}

    a {
      display: flex;
      align-items: flex-start;
      border: 0;
      outline: 0;
    }
  }

  .menu__toggler {
    width: 22px;
    display: flex;
    flex-wrap: wrap;

    ${breakpoint.small`
      display: none;
    `}

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
    height: calc(100vh - 57px);
    max-height: ${(props) => (props.isMenuOpen ? '1000px' : '0')}; // This animates the dropdown's height.
    position: relative;
    padding-top: ${(props) => (props.isMenuOpen ? '16px' : '0')};
    transition: all 0.6s ease;
    overflow: hidden;

    ${breakpoint.small`
      width: auto;
      max-height: 100%!important;
      height: auto;
      display: flex;
      align-items: center;
      padding: 0;
      overflow: visible;
    `}

    > ul {
      ${breakpoint.small`
        display: flex;
        align-items: center;
      `}

      li {
        width: 100%;
        padding: 16px 0;
        border-top: 1px solid ${colors.grey300};

        &:last-child {
          border-bottom: 1px solid ${colors.grey300};

          ${breakpoint.small`
            border: 0;
          `}
        }

        ${breakpoint.small`
          width: auto;
          padding: 0;
          margin-right: 20px;
          border: 0;

          &:last-child {
            margin-right: 0;
          }
        `}

        ${breakpoint.medium`
          margin-right: 40px;
        `}

        a,
        button {
          font-size: 20px;
          font-weight: 600;

          ${breakpoint.small`
            font-size: 16px;
            font-weight: 500;
          `}
        }
      }
    }

    .menu__has-submenu {
      > button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          transform: rotate(-90deg);
          transition: all 0.6s ease;

          ${breakpoint.small`
            margin-left: 4px;
            transform: ${(props) => (props.isSubMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
          `}
        }
      }
    }

    .submenu {
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: ${(props) => (props.isSubMenuOpen ? '0' : '120%')};
      padding-top: 24px;
      background-color: ${colors.white};
      transition: all 0.3s ease;

      ${breakpoint.small`
        width: 512px;
        top: 52px;
        right: 0;
        bottom: auto;
        left: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 32px;
        border-top: 1px solid ${colors.grey300};
        opacity: ${(props) => (props.isSubMenuOpen ? '1' : '0')};
        visibility: ${(props) => (props.isSubMenuOpen ? 'visible' : 'hidden')};
        transform: ${(props) => (props.isSubMenuOpen ? 'translateY(0)' : 'translateY(32px)')};
        transition: all 0.6s ease;
        z-index: -1;
      `}

      .submenu__closer {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        padding: 16px 0;
        font-size: 20px;
        font-weight: 600;
        border-top: 1px solid ${colors.grey300};
        border-bottom: 1px solid ${colors.grey300};

        ${breakpoint.small`
          display: none;
        `}

        svg {
          margin-right: 32px;
        }
      }

      .submenu__general-link {
        width: 100%;
        display: inline-flex;
        margin-bottom: 24px;
        padding-left: 44px;
        font-size: 16px;

        ${breakpoint.small`
          padding-left: 0;
        `}
      }

      ul {
        margin-bottom: 32px;
        padding-left: 44px;

        &:last-child {
          margin-bottom: 0;
        }

        ${breakpoint.small`
          margin: 0 32px 0 0;
          padding: 0;
        `}

        p {
          padding-bottom: 8px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;

          ${breakpoint.small`
            border-bottom: 1px solid ${colors.grey300};
          `}
        }

        li {
          padding: 8px 0;
          margin: 0;
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
  const [isScrollingDown, handleVisibility] = useToggle()
  const [lastScrollPosition, handleLastScrollPosition] = useState(0)

  // Locks scroll if `isMenuOpen`
  useEffect(() => {
    if (window.innerWidth <= 768) {
      if (isMenuOpen) {
        document.querySelector('html').classList.add('no-scroll')
        document.querySelector('body').classList.add('no-scroll')
      } else {
        document.querySelector('html').classList.remove('no-scroll')
        document.querySelector('body').classList.remove('no-scroll')
      }
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (!isSubMenuOpen) {
        if (scrollPosition > 80) {
          if (scrollPosition > lastScrollPosition) {
            if (!isScrollingDown) {
              handleVisibility(true)
            }
          } else {
            if (isScrollingDown) {
              handleVisibility(false)
            }
          }
        }
      }

      handleLastScrollPosition(scrollPosition)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  })

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
    <StyledMenu isMenuOpen={isMenuOpen} isSubMenuOpen={isSubMenuOpen} hideMenu={isScrollingDown}>
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
              <Link to="/about" onClick={() => toggleMenu()}>
                About
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => toggleMenu()}>
                Team
              </Link>
            </li>
            <li className="menu__has-submenu">
              <button type="button" onClick={() => toggleSubMenu()}>
                Research
                <IconCaretDown />
              </button>

              <div className="submenu">
                <h5 className="submenu__closer">
                  <button type="button" onClick={() => toggleSubMenu()}>
                    <IconArrowLeft />
                    Research
                  </button>
                </h5>

                <div className="submenu__general-link">
                  <Link to="/research" className="color--black font-weight--500" onClick={() => toggleSubMenu()}>
                    All Research initiatives
                  </Link>
                </div>

                <ul>
                  <p className="paragraph-small color--grey700">Core Research Projects</p>
                  {data.researchProjects.nodes.map((project) => (
                    <li key={project.id}>
                      <Link to={'/'} className="font-weight--500" onClick={() => toggleSubMenu()}>
                        {project.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  <p className="paragraph-small color--grey700">Our Labs</p>
                  {data.labs.nodes.map((lab) => (
                    <li key={lab.id}>
                      <Link to={'/labs/' + getSlug(lab.name)} className="font-weight--500" onClick={() => toggleSubMenu()}>
                        {lab.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <a href="/publications" onClick={() => toggleMenu()}>
                Publications
              </a>
            </li>
            <li>
              <Link to="/" onClick={() => toggleMenu()}>
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </StyledMenu>
  )
}

export default Menu
