import { GET_WISHLIST_ITEMS } from '../actions/actionTypes/orderTypes'

export const getWishlistData = (state = {}, action) => {
    switch (action.type) {
        case GET_WISHLIST_ITEMS:
            return { ...state, wishlistData: action.payload.wishlistData };
        default:
            return state;
    }
}