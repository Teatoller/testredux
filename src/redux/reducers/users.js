import { FETCH_USERS, NEW_USER } from "../actions/actionTypes/userTypes"

const initialState = {
    users: [],
    user: {}
};

export function users(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            }
            case NEW_USER:
                console.log("kaboom...reducer")
                return {
                    ...state,
                    user: action.payload
    
                }
        default:
            return state;
    }

}
