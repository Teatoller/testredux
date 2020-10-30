export function postsHasErrored(state = false, action) {
    switch (action.type) {
        case 'POSTS_ERROR':
            return action.hasErrored;
        default:
            return state;
    }
}
export function postsIsLoading(state = false, action) {
    switch (action.type) {
        case 'POSTS_START':
            return action.isLoading;
        default:
            return state;
    }
}
export function posts(state = [], action) {
    switch (action.type) {
        case 'POSTS_SUCCESS':
            return action.posts;
        default:
            return state;
    }
}