import { cartReducer, initialState } from "@/reducers/cartReducer"
import { CART_ACTIONS, Product } from "@/types.d"
import { useReducer } from "react"

function useCartReducer(){
    const [state, dispatch] = useReducer(cartReducer, initialState)
    
    const addToCart = (product: Product )=> dispatch({
        type: CART_ACTIONS.ADD_TO_CART, 
        payload: product
    })
    const removeFromCart = (product: Product) => dispatch({
        type: CART_ACTIONS.REMOVE_FROM_CART,
        payload: product
    })
    const clearCart = () => dispatch({type: CART_ACTIONS.CLEAR_CART})
    const decreaseQuantity = (product: Product) => dispatch({
        type: CART_ACTIONS.DECREASE_QUANTITY,
        payload: product
    })
  
  
    return {state, addToCart, removeFromCart, clearCart, decreaseQuantity}
}

export default useCartReducer