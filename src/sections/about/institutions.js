import React from "react";

// Libraries
// import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

// Utils
import breakpoint from "utils/breakpoints/";
import { colors } from "utils/variables/";

// Components
import Container from "components/container/";
import Grid from "components/grid/";
import Accordion from "components/accordion/";

// Icons
import IconExternal from "assets/icons/icon-external-link.inline.svg";
import IconMountSinai from "assets/icons/about/icon-mount-sinai.inline.svg";
import IconHassoPlattner from "assets/icons/about/icon-hasso-plattner.inline.svg";

const StyledInstitutions = styled.section`
  padding-bottom: 60px;

  ${breakpoint.medium`
    padding-bottom: 120px;
  `}

  .institutions__title {
    padding-bottom: 10px;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.2px;
    border-bottom: 2px solid ${colors.grey300};
  }

  .disclaimer {
    width: 100%;
    padding: 32px 16px;
    margin-top: 80px;
    text-align: center;

    ${breakpoint.medium`
      padding: 32px;
    `}

    p {
      max-width: 800px;
      margin: 0 auto;
    }
  }

  .institution__card {
    height: 100%;
    background-color: ${colors.white};

    .institute__content {
      padding: 40px 16px;
      box-shadow: 2px 2px 16px 4px rgba(0, 0, 0, 0.08);

      ${breakpoint.medium`
        padding: 40px;
      `}

      .logo {
        height: 80px;
        display: flex;
      }

      .name {
        margin: 40px 0;
      }

      button {
        color: ${colors.blue300};
      }

      .link {
        align-self: flex-end;
        margin-top: 48px;
        display: flex;
        align-items: center;
        padding-bottom: 16px;
        border-bottom: 1px solid ${colors.blue500};

        &.link--hpims {
          ${breakpoint.large`
            margin-top: 82px;
          `}
        }

        svg {
          margin-left: 8px;
        }
      }
    }

    .summary {
      margin-bottom: 16px;
    }

    .subinstitute {
      margin-top: 80px;

      .subinstitute__logo {
        margin-bottom: 16px;
      }

      h5 {
        margin-bottom: 24px;
      }
    }
  }
`;

const Institutions = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     mountSinai: file(
  //       relativePath: { eq: "about/institution-mount-sinai.png" }
  //     ) {
  //       childImageSharp {
  //         fluid(maxWidth: 544, quality: 100) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //     hassoPlattner: file(
  //       relativePath: { eq: "about/institution-hasso-platner.jpg" }
  //     ) {
  //       childImageSharp {
  //         fluid(maxWidth: 544, quality: 100) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //     logoIcahnSchool: file(
  //       relativePath: { eq: "about/logo-icahn-school.png" }
  //     ) {
  //       childImageSharp {
  //         fixed(height: 60, quality: 100) {
  //           ...GatsbyImageSharpFixed_withWebp
  //         }
  //       }
  //     }
  //     hpiHealthCenter: file(relativePath: { eq: "about/logo-hpi.png" }) {
  //       childImageSharp {
  //         fixed(height: 60, quality: 100) {
  //           ...GatsbyImageSharpFixed_withWebp
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <StyledInstitutions>
      <Container>
        <p className="institutions__title color--grey700 paragraph--small font-weight--600">
          Our Home Institutions
        </p>
        <Grid gutter="32" columns="2">
          <div className="grid__item">
            <div className="institution__card">
              {/* <Img
                fluid={data.mountSinai.childImageSharp.fluid}
                className="institute__image"
                alt="Mount Sinai Health System"
              /> */}
              <StaticImage
                src="../../assets/images/about/institution-mount-sinai.png"
                alt="Mount Sinai Health System"
              />

              <div className="institute__content">
                <div className="logo">
                  <IconMountSinai />
                </div>

                <h4 className="name color--black font-weight--600">
                  Mount Sinai Health System
                </h4>

                <p className="summary">
                  The Mount Sinai Health System is an integrated health care
                  system providing exceptional medical care to our local and
                  global communities. <br />
                  Encompassing the Icahn School of Medicine at Mount Sinai and
                  eight hospital campuses in the New York metropolitan area, as
                  well as a large, regional ambulatory footprint, Mount Sinai is
                  internationally acclaimed for its excellence in research,
                  patient care, and education across a range of specialties.
                </p>

                <Accordion
                  openText="Read more +"
                  closedText="Read less -"
                  content={
                    <p>
                      The Health System is designed to increase efficiencies and
                      economies of scale; improve quality and outcomes; and
                      expand access to advanced primary, specialty, and
                      ambulatory care services throughout a wide clinical
                      network. The Health System includes more than 7,200
                      physicians, including general practitioners and
                      specialists, and 13 free-standing joint-venture centers.
                      Mount Sinai also features a robust and continually
                      expanding network of multispecialty services, including
                      more than 400 ambulatory practice locations throughout the
                      five boroughs of New York City, Westchester, and Long
                      Island. With an extraordinary array of resources for the
                      provision of compassionate, state-of-the-art care, the
                      Mount Sinai Health System is poised to identify and
                      respond to the health-related needs of the diverse
                      populations we serve.
                    </p>
                  }
                />

                <a
                  className="link link--hpims color--blue500 font-weight--600 svg--stroke-blue500"
                  href="https://mountsinai.org/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Visit Website
                  <IconExternal />
                </a>

                <div className="subinstitute">
                  {/* <Img
                    className="subinstitute__logo"
                    fixed={data.logoIcahnSchool.childImageSharp.fixed}
                    alt="Icahn School of Medicine at Mount Sinai"
                  /> */}
                  <StaticImage
                    src="../../assets/images/about/logo-icahn-school.png"
                    alt="Mount Sinai Health System"
                  />
                  <h5>Icahn School of Medicine at Mount Sinai</h5>
                  <p className="summary">
                    The Icahn School of Medicine at Mount Sinai is an
                    international leader in medical and scientific training,
                    biomedical research, and patient care. It is the medical
                    school for the Mount Sinai Health System, which includes
                    eight hospital campuses, and has more than 5,000 faculty and
                    nearly 2,000 students, residents and fellows. Our unwavering
                    pursuit of intellectual exchange, breakthrough research, and
                    multidisciplinary teamwork propels us ever forward in
                    biomedical discoveries and advances. We pursue ideas that
                    often challenge conventional wisdom to revolutionize the
                    practice of medicine and produce dramatically better
                    outcomes for patients. We make big, bold bets by investing
                    in radical free thinkers and technology at the cutting edge.
                    <br />
                    <br />
                  </p>

                  <a
                    className="link color--blue500 font-weight--600 svg--stroke-blue500"
                    href="https://icahn.mssm.edu/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Visit Website
                    <IconExternal />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid__item">
            <div className="institution__card">
              {/* <Img
                fluid={data.hassoPlattner.childImageSharp.fluid}
                className="institute__image"
                alt="Mount Sinai Health System"
              /> */}
              <StaticImage
                src="../../assets/images/about/institution-hasso-platner.jpg"
                alt="Mount Sinai Health System"
              />

              <div className="institute__content">
                <div className="logo">
                  <IconHassoPlattner />
                </div>

                <h4 className="name color--black font-weight--600">
                  Hasso Plattner Institute for Digital Engineering
                </h4>

                <p className="summary">
                  {" "}
                  The Hasso Plattner Institute (HPI) in Potsdam is Germany's
                  university center of excellence for digital engineering,
                  advancing research and education in IT systems engineering,
                  data engineering, cyber security, entrepreneurship, and
                  digital health. With its bachelor‘s and master’s degree
                  programs, the Faculty of Digital Engineering, established
                  jointly by HPI and the University of Potsdam, offers
                  innovative engineering- and application-oriented study
                  programs.
                </p>

                <Accordion
                  openText="Read more +"
                  closedText="Read less -"
                  content={
                    <p>
                      At present, more than 650 students are enrolled in the
                      program. HPI consistently earns a top-notch place in the
                      CHE University Ranking. The HPI School of Design Thinking
                      is Europe’s first innovation school for university
                      students. It is based on the Stanford model of the
                      d.school and offers 240 places annually for a
                      supplementary study. At HPI there are currently twenty
                      professors and over 50 guest professors and lecturers. HPI
                      conducts research noted for its high standard of
                      excellence in its IT topic areas. PhD candidates carry out
                      research at the HPI Research School in Potsdam and its
                      branches in Cape Town, Haifa, Irvine and Nanjing. The
                      focus of HPI’s teaching and research is on the foundations
                      and applications of large, highly complex and networked IT
                      systems. In addition, HPI concentrates on the development
                      and research of user-oriented innovations for all areas of
                      life.
                    </p>
                  }
                />

                <a
                  className="link color--blue500 font-weight--600 svg--stroke-blue500"
                  href="https://hpi.de/en"
                  target="_blank"
                  rel="noopener noreferrer">
                  Visit Website
                  <IconExternal />
                </a>

                <div className="subinstitute">
                  {/* <Img
                    className="subinstitute__logo hpi"
                    fixed={data.hpiHealthCenter.childImageSharp.fixed}
                    alt="HPI Digital Health Center"
                  /> */}
                  <StaticImage
                    src="../../assets/images/about/logo-hpi.png"
                    alt="Mount Sinai Health System"
                  />
                  <h5>HPI Digital Health Center</h5>
                  <p className="summary">
                    The HPI Digital Health Center in Potsdam, Germany, brings
                    together individuals from health sciences, human sciences,
                    data sciences, digital engineering and society with a shared
                    goal to improve health and wellbeing. The Center assumes an
                    open, inclusive network structure of researchers, projects
                    and research institutions in order to empower patients and
                    to transform healthcare with innovative digital health
                    solutions. The interdisciplinary English-language Digital
                    Health master’s program covers the basic concepts and
                    methods of IT systems engineering and data engineering, and
                    the basics of medicine, as well as providing an
                    understanding of different healthcare systems and aims at
                    computer science and medical students who want to work as
                    highly qualified experts in the health sector, at the
                    interface between IT, computer science, and medicine.
                  </p>

                  <a
                    className="link color--blue500 font-weight--600 svg--stroke-blue500"
                    href="https://hpi.de/en"
                    target="_blank"
                    rel="noopener noreferrer">
                    Visit Website
                    <IconExternal />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <div className="disclaimer bg--blue500">
          <p className="color--white font-weight--600">
            The Hasso Plattner Institute for Digital Health at Mount Sinai is
            generously supported through a philanthropic gift by the Hasso
            Plattner Foundation.
          </p>
        </div>
      </Container>
    </StyledInstitutions>
  );
};

export default Institutions;
