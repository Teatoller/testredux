import { combineReducers } from "redux";
import { items, itemsHasErrored, itemsIsLoading } from "./items";
import { posts, postsHasErrored, postsIsLoading } from "./posts";
import { bullets } from "./bullets";
import { users } from "./users"
import { counter } from "./counterReducer"

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  posts,
  postsHasErrored,
  postsIsLoading,
  bullets,
  users,
  counter,
});
