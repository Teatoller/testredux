import { FETCH_POSTS, NEW_POST } from "./actionTypes/types"
import axios from "axios";

// export function bulletpostsFetchData() {
//     return (dispatch) => {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then((response) => response.data)
//             .then((data) => dispatch({
//                 type:FETCH_POSTS,
//                 payload: data
//             }))
//             .catch(() => this.setState({ hasErrored: true }));
//     };
// }

// export const bulletpostsFetchData = () => dispatch => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then((response) => response.data)
//         .then((data) => dispatch({
//             type: FETCH_POSTS,
//             payload: data
//         }))
//         .catch(() => this.setState({ hasErrored: true }));
// }

export const bulletpostsFetchData = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.data)
            .then((data) => dispatch({
                type: FETCH_POSTS,
                payload: data
            }))
    };
}

// export function bulletpostsFetchData(url) {
//     return (dispatch) => {
//         axios
//             .get(url)
//             .then((response) => {
//                 return response;
//             })
//             .then((response) => response.data)
//             .then((data) => dispatch({
//                 type: FETCH_POSTS,
//                 payload: data
//             }))
//     };
// }