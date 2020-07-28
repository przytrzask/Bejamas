/** @jsx jsx */
import { jsx } from "theme-ui"

import { useProducts } from "../../../hooks/useProducts"

function List() {
  const products = useProducts()
  return (
    <section sx={{ paddingTop: [60, 60, 105] }}>
      {JSON.stringify(products, null, 2)}
    </section>
  )
}

export default List
