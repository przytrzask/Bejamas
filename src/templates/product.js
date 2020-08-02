/** @jsx jsx */
import { graphql } from "gatsby"
import { jsx, Styled } from "theme-ui"

import { Container, Col, Row } from "../components/Grid"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import { BasketProvider, useBasket } from "../components/Basket"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        name
        description
        tag
        price
        image {
          publicURL
        }
      }
    }
  }
`

const ProductTemplate = ({ data: { mdx: product } }) => {
  return (
    <BasketProvider>
      <Layout>
        <SEO title={product.frontmatter.name} />
        <Product product={product} />
      </Layout>
    </BasketProvider>
  )
}

function Product({ product }) {
  const { addProductToBasket } = useBasket()

  return (
    <Container>
      <section sx={{ paddingTop: [60, 60, 105] }}>
        <Row styles={{ justifyContent: ["center"] }}>
          <Col styles={styles.imgWrapper}>
            <img
              src={product.frontmatter.image.publicURL}
              alt={`product ${product.name} thumbnail`}
              style={{ width: "100%" }}
            />
          </Col>
          <Col styles={styles.leadWrapper}>
            <span sx={{ color: "secondary" }}>{product.frontmatter.tag}</span>
            <h1 sx={styles.heading}>{product.frontmatter.name}</h1>
            <Styled.p
              styles={{
                lineHeight: 1.59,
              }}
            >
              {product.frontmatter.description}
            </Styled.p>
            <span sx={styles.price}>
              <strong>${product.frontmatter.price}</strong>
            </span>
            <button
              sx={{ variant: "button.primary", mx: ["auto", null, 0] }}
              onClick={() => addProductToBasket(product.id)}
            >
              Add to cart
            </button>
          </Col>
        </Row>
        <img />
      </section>
    </Container>
  )
}

export default ProductTemplate

const styles = {
  heading: { mt: 1, color: "white" },
  imgWrapper: {
    width: ["1/2", "1/2", "2/5", null, 450],
    textAlign: ["center", "center", "left"],
  },

  leadWrapper: {
    width: ["1", "1", "3/5", null, 650],
    ml: ["auto", 0, 0, 0, 0, 100],
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    mb: ["65px", "65px", 0],
  },
  price: { py: 2, color: "white" },
}
