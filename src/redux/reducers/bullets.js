import { FETCH_POSTS, NEW_POST } from "../actions/actionTypes/types"

const initialState = {
    posts: [],
    post: {}
};

export function bullets(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }

}
