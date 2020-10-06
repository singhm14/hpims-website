/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

// Absolute path
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
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
          title
        }
      }
    }
  `)

  const getSlug = (tag) => {
    if (tag) {
      tag = tag.replace(/^\s+|\s+$/g, '')
      tag = tag.toLowerCase()

      // remove accents, swap ñ for n, etc
      var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
      var to = 'aaaaeeeeiiiioooouuuunc------'
      for (var i = 0, l = from.length; i < l; i++) {
        tag = tag.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
      }

      tag = tag
        .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes
    }

    return tag
  }

  response.data.allContentfulTeamMembers.nodes.forEach((node) => {
    createPage({
      component: path.resolve('./src/templates/team-member-profile.js'),
      path: `/team/${getSlug(node.name)}`,
      context: {
        id: node.id
      }
    })
  })

  response.data.allContentfulResearchProjects.nodes.forEach((node) => {
    createPage({
      component: path.resolve(`./src/templates/research-project.js`),
      path: `/research-projects/${getSlug(node.title)}`,
      context: {
        id: node.id
      }
    })
  })
}
