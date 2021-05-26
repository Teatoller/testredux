import { GET_ORDER_STATUS } from '../actions/actionTypes/orderTypes'

export const orderStatus = (state = {}, action) => {
    switch (action.type) {
        case GET_ORDER_STATUS:
            return { ...state, orderStatusData: action.payload.orderStatus };
        default:
            return state;
    }
}