import {ADD_TO_CART_SUCCESS} from '../actions/cartTypes'

const initialState = {
    isAddedToCart: false,
}

export const addToCartReducer = (state = initialState, action) => { 
   switch (action.type) {
      case ADD_TO_CART_SUCCESS :
         return {
            ...state,
            isAddedToCart: !state.isAddedToCart
         }
      default:
         return state;
   }
}