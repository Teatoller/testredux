import { INCREMENT, DECREMENT, RESET } from '../actions/actionTypes/counterTypes'

export const increment = () => {
    console.log("increment action called...")
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    console.log("decrement action called...")
    return {
        type: DECREMENT
    }
}

export const reset = () => {
    console.log("reset action called...")
    return {
        type: RESET
    }
}
