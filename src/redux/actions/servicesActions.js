import axios from 'axios'
// import { itemsLoading, itemsFetchDataSuccess } from '../actions/actions'


export function itemsLoading(bool) {
    return {
      type: "POSTS_START", // get correct code
      isLoading: bool,
    };
  }
  
  export function itemsFetchDataSuccess(posts) {
    return {
      type: "POSTS_SUCCESS", // get correct code
      posts,
    };
  }

export const makeApiCall=()=> {
   return (dispatch) => {
      dispatch(itemsLoading(true));
      axios.get('http://api.tvmaze.com/shows')
      .then((response) => {
         if (response.status !== 200) {
            throw Error(response.statusText);
         }
         dispatch(itemsLoading(false));
         return response;
      })
      .then((response) => dispatch(itemsFetchDataSuccess(response.data)))
   };
}