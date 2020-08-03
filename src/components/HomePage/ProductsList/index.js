/** @jsx jsx */
import React from "react"
import { jsx, Styled, Flex, IconButton } from "theme-ui"
import { Link } from "gatsby"
import { useSpring } from "framer-motion"

import { useProducts } from "../../../hooks/useProducts"
import { useSiteData } from "../../../hooks/useSiteData"
import { useBasket } from "../../../components/Basket"

import arrow from "../../../images/elements/arrow.svg"
import plus from "../../../images/elements/plus.svg"

const ARTICLE_WIDTH = 275
// aproximately since it is taken form themeUI
const ARTICLE_MARGIN = 25

function List() {
  const listItem = React.useRef(null)
  const products = useProducts()
  const siteData = useSiteData()

  const spring = useSpring(0, { damping: 300, stiffness: 200 })

  const moveListLeft = React.useCallback(() => {
    const delta = spring.get() - (ARTICLE_WIDTH + ARTICLE_MARGIN)
    spring.set(delta < 0 ? 0 : delta)
  }, [])

  const moveListRight = React.useCallback(() => {
    const { offsetWidth: width, scrollWidth } = listItem.current

    const maxDelta = scrollWidth - width
    const delta = spring.get() + ARTICLE_WIDTH + ARTICLE_MARGIN
    spring.set(delta > maxDelta ? maxDelta : delta)
  }, [])

  React.useEffect(() => {
    spring.onChange(latest => {
      if (listItem.current) {
        listItem.current.scrollLeft = latest
      }
    })
  }, [spring])

  return (
    <section sx={{ py: [60, 60, 105] }}>
      <h2>{siteData.title}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: siteData.lead,
        }}
      />
      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <IconButton
          onClick={moveListLeft}
          sx={{
            minWidth: [40, 65],
            height: [40, 65],
          }}
        >
          <img
            src={arrow}
            sx={{
              width: "100%",
            }}
          />
        </IconButton>
        <div
          ref={listItem}
          sx={{
            display: "flex",
            overflow: "hidden",
            mx: 4,
            "> a": {
              mr: 6,
            },
          }}
        >
          {products.map(product => (
            <ProductPreview key={product.id} product={product} />
          ))}
        </div>
        <IconButton
          onClick={moveListRight}
          sx={{
            minWidth: [40, 65],
            height: [40, 65],
            transform: "rotate(180deg)",
          }}
        >
          <img
            src={arrow}
            sx={{
              width: "100%",
            }}
          />
        </IconButton>
      </Flex>
    </section>
  )
}

function ProductPreview({ product }) {
  const { addProductToBasket } = useBasket()

  return (
    <Link to={product.slug} sx={{ variant: "text.linkNeutral" }}>
      <article sx={articleStyles.article}>
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
          sx={articleStyles.button}
          onClick={ev => {
            ev.stopPropagation()
            ev.preventDefault()
            addProductToBasket(product.id)
          }}
        >
          <img src={plus} />
        </button>
      </article>
    </Link>
  )
}

const articleStyles = {
  article: {
    bg: "background.accent",
    p: 3,
    width: ARTICLE_WIDTH,
    height: "auto",
    border: "3px solid #969393",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    overflow: "auto",
  },
  button: {
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
  },
}

export default List
