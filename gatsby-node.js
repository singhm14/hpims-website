/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

// Absolute path
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

// Team Member Profile
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const response = await graphql(`
    query {
      allContentfulTeamMembers {
        nodes {
          id
          name
        }
      }

      allContentfulResearchProjects {
        nodes {
          id
          slug
          title
        }
      }

      allContentfulLabs {
        nodes {
          id
          title
        }
      }
    }
  `)

  const getSlug = (tag) => {
    if (tag) {
      tag = tag.replace(/^\s+|\s+$/g, "")
      tag = tag.toLowerCase()

      // remove accents, swap ñ for n, etc
      var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;"
      var to = "aaaaeeeeiiiioooouuuunc------"
      for (var i = 0, l = from.length; i < l; i++) {
        tag = tag.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
      }

      tag = tag
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-") // collapse dashes
    }

    return tag
  }

  // Team Members
  response.data.allContentfulTeamMembers.nodes.forEach((node) => {
    createPage({
      component: path.resolve("./src/templates/team-member-profile.js"),
      path: `/team/${getSlug(node.name)}`,
      context: {
        id: node.id,
      },
    })
  })

  // Research Projects
  response.data.allContentfulResearchProjects.nodes.forEach((node) => {
    createPage({
      component: path.resolve(`./src/templates/research-project.js`),
      path: `/research-projects/${node.slug}`,
      context: {
        id: node.id,
      },
    })
  })

  // Students Projects
  createPage({
    component: path.resolve(`./src/templates/students-projects.js`),
    path: `/research-projects/co-innovation-research-exchange/`,
  })

  // Labs
  response.data.allContentfulLabs.nodes.forEach((node) => {
    if (node.id !== "2313d23b-0399-5b1f-9d60-e5138001d62b") {
      createPage({
        component: path.resolve(`./src/templates/lab.js`),
        path: `/labs/${getSlug(node.title)}`,
        context: {
          id: node.id,
        },
      })
    }
  })
}
