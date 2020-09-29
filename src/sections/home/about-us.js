import React from 'react'

// Libraries
import Lottie from 'react-lottie'
import styled from 'styled-components'

// Utils
import breakpoint from 'utils/breakpoints/'

// Components
import Container from 'components/container/'
import Img from 'gatsby-image'

// Animations
import AboutAnimation from 'assets/animations/home/about-animation.json'

const StyledAboutUs = styled.section`
  padding-top: 64px;
  text-align: center;

  ${breakpoint.medium`
    padding-top: 36px;
  `}

  .section__title {
    max-width: 424px;
    margin: 0;
    text-align: left;

    ${breakpoint.medium`
      max-width: 544px;
    `}

    h3 {
      margin-bottom: 32px;
    }

    p {
      font-size: 14px;

      ${breakpoint.medium`
        font-size: 16px;
      `}
    }
  }
`

class AboutUs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
    this.contentWrapper = React.createRef()
  }

  componentDidMount = () => {
    const observer = new IntersectionObserver(
      ([entry], self) => {
        if (entry.isIntersecting && !this.state.isVisible) {
          this.handleVisibility()
          self.unobserve(this.contentWrapper.current)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      }
    )

    observer.observe(this.contentWrapper.current)
  }

  handleVisibility = () => {
    if (!this.state.isVisible) {
      this.setState({
        isVisible: true
      })
    }
  `)
  return (
    <StyledAboutUs id="about">
      <Container>
        <div className="section__title">
          <p className="section__subtitle color--black">About Us</p>
          <h3 className="color--blue500">Turning the promise of digital health into a reality</h3>
          <p>Science has helped humanity to improve and extend life. Today, technological advances have allowed us to understand and analyze information in ways never before possible.</p>
          <br />
          <p>The Hasso Plattner Institute for Digital Health at Mount Sinai (HPI･MS) propels these possibilities through an extraordinary international academic collaboration between the Hasso Plattner Institute for Digital Engineering in Potsdam, Germany, and the Mount Sinai Health System in New York City, USA.</p>
        </div>
      </Container>

  render = () => {
    const animationOptions = {
      loop: true,
      autoplay: this.state.isVisible,
      animationData: AboutAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    return (
      <StyledAboutUs>
        <Container>
          <div className="section__title" ref={this.contentWrapper}>
            <p className="section__subtitle color--black">About Us</p>
            <h3 className="color--blue500">Turning the promise of digital health into a reality</h3>
            <p>Science has helped humanity to improve and extend life. Today, technological advances have allowed us to understand and analyze information in ways never before possible.</p>
            <br />
            <p>The Hasso Plattner Institute for Digital Health at Mount Sinai (HPI･MS) propels these possibilities through an extraordinary international academic collaboration between the Hasso Plattner Institute for Digital Engineering in Potsdam, Germany, and the Mount Sinai Health System in New York City, USA.</p>

            <Tertiary to="/about" className="about__link color--blue300 color-hover--blue500 font-weight--600 svg--stroke-blue300 svg-hover--stroke-blue500" text="Learn more about us" />
          </div>
        </Container>

        <div className="about-us__image">
          <Lottie options={animationOptions} isClickToPauseDisabled={true} />
        </div>
      </StyledAboutUs>
    )
  }
}
export default AboutUs
