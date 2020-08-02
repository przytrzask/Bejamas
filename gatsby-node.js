exports.createPages = async({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create pages", result.errors)
  }

  const products = result.data.allMdx.nodes
  products.forEach(product => {
    actions.createPage({
      path: product.frontmatter.slug,
      component: require.resolve("./src/templates/product.js"),
      context: {
        slug: product.frontmatter.slug,
      },
    })
  })
}
