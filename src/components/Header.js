/** @jsx jsx */
import { Badge, IconButton, jsx } from "theme-ui"
import { Link } from "gatsby"

import { Container, Row } from "../components/Grid"
import basket from "../images/elements/basket.svg"
import { useBasket } from "../components/BasketProvider/Basket"

export default function Header() {
  const { products } = useBasket()

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
          }}
        >
          <Link to="/" sx={styles.mainLink}>
            JAM SHOP
          </Link>
          <IconButton>
            <img src={basket} />
            <Badge variant="circle">{products.length}</Badge>
          </IconButton>
        </Row>
      </Container>
    </header>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

const styles = {
  header: {
    padding: "20px 0",
    position: "absolute",
    top: 0,
    left: 0,
    width: "1",
    background: "transparent",
  },
  mainLink: {
    variant: "text.link",
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
}
