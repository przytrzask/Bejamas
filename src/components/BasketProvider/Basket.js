import React from "react"
import { useSessionStorage } from "../../hooks/useSessionStorage"

export const BasketContext = React.createContext(undefined)

export const BasketProvider = ({ children }) => {
  const [value, setValue] = useSessionStorage("productsBasket", [])
  const [products, setProducts] = React.useState(value)

  React.useEffect(() => {
    setValue(products)
  }, [setValue, products])

  const addProductToBasket = React.useCallback(product => {
    if (!products.includes(product)) setProducts([...products, product])
  })

  return (
    <BasketContext.Provider value={{ products, addProductToBasket }}>
      {children}
    </BasketContext.Provider>
  )
}

export const useBasket = () => {
  const context = React.useContext(BasketContext)
  if (context === undefined) {
    throw new Error("useBasket must be used within a BasketProvider")
  }
  return context
}
