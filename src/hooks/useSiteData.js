import { graphql, useStaticQuery } from "gatsby"

export function useSiteData() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { lead: { ne: null } } }) {
        edges {
          node {
            frontmatter {
              title
              lead
              hero {
                title
                cta {
                  text
                  href
                }
              }
            }
          }
        }
      }
    }
  `)

  const { frontmatter } = data.allMdx.edges[0].node
  console.log(frontmatter)

  return {
    lead: frontmatter.lead,
    title: frontmatter.title,
    hero: frontmatter.hero,
  }
}
