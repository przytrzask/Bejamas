/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import { Link } from "gatsby"

import { useProducts } from "../../../hooks/useProducts"

function List() {
  const products = useProducts()

  return (
    <section sx={{ paddingTop: [60, 60, 105] }}>
      <h2>Explore community choices</h2>
      <p>
        Updated daily based on most popular choices <br /> among dev community
      </p>
      {/* @todo add carousel like component */}
      <Flex
        sx={{
          overflow: "auto",
        }}
      >
        {products.map(product => (
          <ProductPreview key={products.slug} product={product} />
        ))}
      </Flex>
    </section>
  )
}

function ProductPreview({ product }) {
  return (
    <Link to={product.slug} sx={{ variant: "text.link" }}>
      <article sx={articleStyles}>
        <img src={product.image} alt="product image" />
        <h3
          sx={{
            fontFamily: "body",
          }}
        >
          {product.name}
        </h3>
        <Styled.p>{product.excerpt}</Styled.p>
        <button
          sx={{
            variant: "button.primary",
            ml: "auto",
            mt: "auto",
            borderRadius: 33,
            width: 33,
            p: 0,
            height: 33,
            maxWidth: "unset",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={ev => {
            ev.stopPropagation()
            ev.preventDefault()
          }}
        >
          +
        </button>
      </article>
    </Link>
  )
}

const articleStyles = {
  bg: "background.accent",
  p: 3,
  mr: 5,
  ":first-of-type": {
    ml: 0,
  },
  width: "265px",
  height: "auto",
  border: "3px solid #969393",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  overflow: "auto",
}

export default List
