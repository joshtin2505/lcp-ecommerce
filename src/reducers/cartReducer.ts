import { CART_ACTIONS, Cart, type Product } from "@/types.d"

const savedCartString = typeof window !== 'undefined' ? localStorage.getItem('cart') ?? '[]' : '[]'
const savedCart: Cart = JSON.parse(savedCartString)
export const initialState: Cart = savedCart
// export const initialState: Cart = JSON.parse(window.localStorage.getItem('cart') || '[]') as Cart


// actualizar localStotrage con estado del carrito
export const updateLocalStorage = (cart: Cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

type ActionTypes = {
        type: CART_ACTIONS.ADD_TO_CART | CART_ACTIONS.DECREASE_QUANTITY | CART_ACTIONS.REMOVE_FROM_CART
        payload: Product
    } | {
        type: CART_ACTIONS.CLEAR_CART,
    }

export function cartReducer (state: Cart, action: ActionTypes): Cart { 
    
  if (action.type === CART_ACTIONS.CLEAR_CART) {
      updateLocalStorage([])
      return []
    }
    
    const {id} = action.payload
    const productInCartIndex = state.findIndex((item) => item.id === id) // retorna el indice del producto en el carrito
    
    if (action.type === CART_ACTIONS.ADD_TO_CART) {
        if(productInCartIndex >= 0){ // si esta el producto en carrito
            const newState = [...state]
            newState[productInCartIndex].quantity++
            updateLocalStorage(newState)
            return newState
        }
        // si no esta
        const newState = [...state, {...action.payload, quantity: 1}]
        updateLocalStorage(newState)
        return newState
    }
    else if (action.type === CART_ACTIONS.REMOVE_FROM_CART){
        const newState = state.filter(item => item.id !== id)
        updateLocalStorage(newState)
        return newState
    }
    else if (action.type === CART_ACTIONS.DECREASE_QUANTITY){
        if(productInCartIndex >= 0){ // si esta el producto en carrito
            const newState = [...state]
            newState[productInCartIndex].quantity--
            updateLocalStorage(newState)
            return newState
        }
    }

    return state
}