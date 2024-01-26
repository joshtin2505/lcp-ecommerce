import React, { createContext } from "react"
import { Cart, type Product } from "@/types.d"
import useCartReducer from "@/hooks/useCartReducer"
interface ContextValues {
  cart: Cart,
  addToCart: (product: Product) => void,
  clearCart: () => void,
  removeFromCart: (product: Product) => void
}

export const CartContext = createContext<ContextValues | undefined>(undefined)
function CartContextProvider({children}: {children: React.ReactNode}) {
  const {
    state,
    addToCart, 
    removeFromCart, 
    clearCart 
  } = useCartReducer()
  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider