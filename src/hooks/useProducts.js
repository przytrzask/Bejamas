import { graphql, useStaticQuery } from "gatsby"

export function useProducts() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            name
            slug
            price
            excerpt
            image
            description
            tag
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(product => ({
    name: product.frontmatter.name,
    image: product.frontmatter.image,
    excerpt: product.excerpt,
  }))
}
