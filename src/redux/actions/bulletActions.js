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

export const createPost = (postData) => {
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
    return (dispatch) => {
        axios.post('https://jsonplaceholder.typicode.com/posts',
            postData, {
            headers: headers
        },
        )
            .then((response) => response.data)
            .then((post) => dispatch({
                type: NEW_POST,
                payload: post
            }))
            .catch(function (error) {
                console.log(error);
            });
    };
}