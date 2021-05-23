import { combineReducers } from "redux";
import { items, itemsHasErrored, itemsIsLoading } from "./items";
import { posts,postsHasErrored, postsIsLoading } from "./posts";
import { bullets} from "./bullets";

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  posts,
  postsHasErrored,
  postsIsLoading,
  bullets,
});
