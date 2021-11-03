const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Docs {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `)

  data.allMdx.nodes.forEach(node => {
    actions.createPage({
      path: "/docs/" + node.slug,
      component: path.resolve("./src/templates/documentation.js"),
      context: { slug: node.slug },
    })
  })
}
