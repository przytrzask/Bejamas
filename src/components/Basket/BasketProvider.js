import React from "react"
import { useSessionStorage } from "../../hooks/useSessionStorage"

export const BasketContext = React.createContext(undefined)

export const BasketProvider = ({ children }) => {
  const [value, setValue] = useSessionStorage("productsBasket", [])
  const [selectedProductIds, setSelectedIds] = React.useState(value)

  React.useEffect(() => {
    setValue(selectedProductIds)
  }, [setValue, selectedProductIds])

  const addProductToBasket = React.useCallback(product => {
    if (!selectedProductIds.includes(product)) { setSelectedIds([...selectedProductIds, product]) }
  })

  return (
    <BasketContext.Provider value={{ selectedProductIds, addProductToBasket }}>
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
