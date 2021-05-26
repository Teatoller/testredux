import { INCREMENT, DECREMENT, RESET } from '../actions/actionTypes/counterTypes'

const initialState = {
    count: 0
}

export const counter = (state = initialState, action) => {
    console.log("reducer called...")
    switch (action.type) {
        case INCREMENT:
            console.log("increment reducer called...")
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            console.log("decrement reducer called...")
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            console.log("reset reducer called...")
            return {
                ...state,
                count: state.count = 0
            }
        default:
            return state
    }
}
