const path = require('path');

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Docs {
      allMdx {
        nodes {
          frontmatter {
            title
          }
          slug
        }
      }
      allNatura11YiconsYaml {
        nodes {
          className
          codePoint
          icon
          id
          svgCode {
              body
          }
          tags
          unicode
        }
      }
    }
  `);

  data.allMdx.nodes.forEach(node => {
    actions.createPage({
      path: '/docs/' + node.slug,
      component: path.resolve('./src/templates/documentation.js'),
      context: { 
        slug: node.slug,
        title: node.frontmatter.title 
       },
    });
  });

  data.allNatura11YiconsYaml.nodes.forEach(node => {
    actions.createPage({
      path: '/icons/' + node.className,
      component: path.resolve('./src/templates/iconSingle.js'),
      context: { className: node.className },
    });
  });

}