import { combineReducers } from 'redux';
import { popular, popularCache, popularModal } from "./popular";

export default combineReducers({
  popular,
  popularCache,
  popularModal
});
