/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import { useBasket } from "../../components/Basket"
import { useProducts } from "../../hooks/useProducts"

export function Basket() {
  const allProducts = useProducts()
  const { selectedProductIds } = useBasket()

  const productsInBasket = allProducts.filter(product =>
    selectedProductIds.includes(product.id),
  )

  return (
    <React.Fragment>
      <ul sx={listStyles.ul}>
        {productsInBasket.map(product => (
          <li sx={listStyles.li} key={product.id}>
            <img sx={{ width: 25 }} src={product.image} />
            <span>{product.name}</span>
            <span
              sx={{
                justifySelf: "end",
              }}
            >
              {product.price}
            </span>
          </li>
        ))}
      </ul>
      <button sx={{ variant: "button.primary", ml: "auto", mt: "auto" }}>
        SUBMIT
      </button>
    </React.Fragment>
  )
}

const listStyles = {
  ul: {
    p: 0,
  },
  li: {
    display: "grid",
    justifyContent: "space-between",
    listStyleType: "none",
    gridTemplateColumns: "30px 1fr 50px",
  },
}
