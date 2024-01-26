import { CartContext } from "@/context/CartContext"
import { useContext } from "react"

export const useCart = () => {
    const context = useContext(CartContext)
    if (context == undefined){
      throw new Error("useCart must be used within a CartProvider")
    }

    const {addToCart,cart,clearCart,removeFromCart} = context

    function inCart(id: number){
        return cart.some((item) => item.id === id) // retorna el indice del producto en el carrito
    }
    
    return {addToCart,cart,clearCart,removeFromCart, inCart}
  }