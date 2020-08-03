/** @jsx jsx */
import { Badge, IconButton, jsx } from "theme-ui"
import { Link } from "gatsby"
import React from "react"
import { AnimatePresence } from "framer-motion"

import { Container, Row } from "../components/Grid"
import { Dropdown } from "./Dropdown/Dropdown"

import basket from "../images/elements/basket.svg"
import { useBasket, Basket } from "../components/Basket"

export default function Header() {
  const { selectedProductIds } = useBasket()
  const [isOpen, setIsOpen] = React.useState(false)
  const onOutClick = React.useCallback(() => setIsOpen(false))

  const isBasketEmpty = React.useMemo(() => selectedProductIds.length < 1, [
    selectedProductIds,
  ])

  return (
    <header sx={styles.header}>
      <Container
        sx={{
          maxWidth: [
            "100%",
            "552px",
            "732px",
            "910px",
            "1100px",
            "1320px",
            "1480px",
          ],
        }}
      >
        <Row
          styles={{
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Link to="/" sx={styles.mainLink}>
            JAM SHOP
          </Link>
          <IconButton
            sx={styles.button}
            disabled={isBasketEmpty}
            onClick={() => setIsOpen(true)}
          >
            <img src={basket} />
            <Badge
              data-cy="basket-counter"
              variant={isBasketEmpty ? "circle" : "circleHighlighted"}
            >
              {selectedProductIds.length}
            </Badge>
          </IconButton>
          <AnimatePresence>
            {isOpen && (
              <Dropdown onOutClick={onOutClick}>
                <Basket />
              </Dropdown>
            )}
          </AnimatePresence>
        </Row>
      </Container>
    </header>
  )
}

const styles = {
  header: {
    py: "20px",
    px: [2, null],
    position: "absolute",
    top: 0,
    left: 0,
    width: "1",
    background: "transparent",
    zIndex: 4,
  },
  mainLink: {
    variant: "text.link",
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
  button: {
    width: "auto",
    height: "auto",
  },
}
