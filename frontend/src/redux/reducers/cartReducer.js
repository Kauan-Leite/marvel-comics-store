import { ADD_TO_CART, REMOVE_ITEM_CART } from '../actions'

const INITIAL_STATE = {
  cart: [],
  totalValue: 0
}

function cartReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalValue: state.totalValue + action.payload.price
      }
    case REMOVE_ITEM_CART:
      return {
        ...state,
        cart: state.cart.filter((element, index) => index !== action.payload.index),
        totalValue: state.totalValue - action.payload.price
      }
    default:
      return state
  }
}

export default cartReducer
