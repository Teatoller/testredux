import { FETCH_USERS, NEW_USER } from "./actionTypes/userTypes"
import axios from "axios";

export const fetchUsersData = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.data)
            .then((data) => dispatch({
                type: FETCH_USERS,
                payload: data
            }))
    };
}

export const createNewUser = (userData) => dispatch => {
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
    console.log("bang!!!! user action")
    axios.post('https://jsonplaceholder.typicode.com/users',
        userData, {
        headers: headers
    },
    )
        .then((response) => response.data)
        .then((user) => dispatch({
            type: NEW_USER,
            payload: user
        }))
        .catch(function (error) {
            console.log(error);
        });
}
