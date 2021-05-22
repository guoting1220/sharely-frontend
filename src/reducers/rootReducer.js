import { combineReducers } from 'redux';
import posts from './postsReducer';
import titles from './titlesReducer';
import user from './userReducer';
import errors from './errorsReducer';

export default combineReducers({
  posts,
  titles,
  user,
  errors
})
