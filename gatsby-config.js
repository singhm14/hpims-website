require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `HPI∙MS | Hasso Plattner Institute for Digital Health at Mount Sinai`,
    description: `The institute is a collaboration between the Hasso Plattner Institute for Digital Engineering in Potsdam, Germany, and the Mount Sinai Health System. Our goal is to develop innovations to revolutionize how people think about their personal health and health systems and have a tangible impact on patients’ lives.`,
    url: "https://hpism.org/",
    image: "",
    twitterUsername: "@hpi_health",
    author: `@indicius`,
  },
  plugins: [
    // persistent-layout is enabled by default
    // to disable comment the following plugin,
    // and manually wrap your pages with your layout(s)
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/layout-primary.js`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "6cma8zf36gz0",
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `animations`,
        path: `${__dirname}/src/assets/animations`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inter\:400,500,600,700`],
        display: `swap`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
