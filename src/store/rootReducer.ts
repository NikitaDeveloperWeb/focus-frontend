import { combineReducers } from 'redux';
import { postReducer } from './ducks/posts/reducer';
import { userReducer } from './ducks/user/reducer';
import { UsersReducer } from './ducks/users/reducer';

export const rootReducer = combineReducers({
  posts: postReducer,
  user: userReducer,
  users: UsersReducer,
});
