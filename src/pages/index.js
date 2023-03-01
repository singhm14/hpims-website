import React from "react";

// Libraries
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

// Sections
import Banner from "sections/home/banner";
import Hero from "sections/home/hero";
import AboutUs from "sections/home/about-us";
import Faculty from "sections/home/faculty";
import WhyHPIMS from "sections/home/why-hpims";
import ResearchProjects from "sections/home/research-projects";
import Publications from "sections/home/publications";
import News from "sections/home/news";

const Home = () => {
  const { allContentfulHomesFacultyBanner: banner } = useStaticQuery(graphql`
    query {
      allContentfulHomesFacultyBanner {
        nodes {
          title
          content {
            content
          }
          link
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      {banner && <Banner data={banner.nodes[0]} />}
      <Hero />
      <AboutUs />
      <Faculty />
      <WhyHPIMS />
      <ResearchProjects />
      <Publications />
      <News />
    </React.Fragment>
  );
};

export default Home;
