import { graphql, useStaticQuery } from "gatsby"

export function useProducts() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          id
          excerpt
          frontmatter {
            name
            slug
            price
            excerpt
            image {
              publicURL
            }
            description
            tag
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(product => ({
    name: product.frontmatter.name,
    image: product.frontmatter.image.publicURL,
    slug: product.frontmatter.slug,
    price: product.frontmatter.price,

    excerpt: product.excerpt,
    id: product.id,
  }))
}
