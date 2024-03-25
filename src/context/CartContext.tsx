import React, { createContext, useState } from "react"
import type { Cart, Product } from "@/types/types"
import useCartReducer from "@/hooks/useCartReducer"
interface ContextValues {
  cart: Cart
  addToCart: (product: Product) => void
  clearCart: () => void
  removeFromCart: (product: Product) => void
  decreaseQuantity: (product: Product) => void
  openCart: boolean
  setOpenCart: (open: boolean) => void
}

export const CartContext = createContext<ContextValues | undefined>(undefined)
function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [openCart, setOpenCart] = useState(false)

  const { state, addToCart, removeFromCart, clearCart, decreaseQuantity } =
    useCartReducer()
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
        decreaseQuantity,
        openCart,
        setOpenCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
