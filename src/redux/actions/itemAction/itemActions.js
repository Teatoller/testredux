import { ITEMS_REQUEST, ITEMS_REQUEST_SUCCESS } from '../actionTypes/itemTypes';

export const itemsRequest = (bool, startIndex, endIndex) => {
    let payload = {
        isLoading: bool,
        startIndex,
        endIndex
    }
    return {
        type: ITEMS_REQUEST,
        payload
    }
}
export const itemsRequestSuccess = (bool) => {
    return {
        type: ITEMS_REQUEST_SUCCESS,
        isLoading: bool,
    }
}