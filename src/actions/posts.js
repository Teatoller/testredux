import axios from "axios";

export function postsHasErrored(bool) {
  return {
    type: "POSTS_HAS_ERRORED",
    hasErrored: bool,
  };
}

export function postsIsLoading(bool) {
  return {
    type: "POSTS_IS_LOADING",
    isLoading: bool,
  };
}

export function postsFetchDataSuccess(posts) {
  return {
    type: "POSTS_FETCH_DATA_SUCCESS",
    posts,
  };
}

export function postsFetchData(url) {
  return (dispatch) => {
    // this.setState({ isLoading: true });
    dispatch(postsIsLoading(true));

    axios
      .get(url)
      .then((response) => {
        if (!response) {
          throw Error(response.statusText);
        }
        // this.setState({ isLoading: false });
        dispatch(postsIsLoading(false));
        return response;
      })
      .then((response) => response.data)
      //   .then((posts) => this.setState({ posts })) // ES6 property value shorthand for { posts: posts }
      .then((posts) => dispatch(postsFetchDataSuccess(posts)))
      //   .catch(() => this.setState({ hasErrored: true }));
      .catch(() => dispatch(postsHasErrored(true)));
  };
}
