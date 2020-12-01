//ts-ignore
import { applyMiddleware, compose } from 'redux';
import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { PostState } from './ducks/posts/contracts/state';
import { UserState } from './ducks/user/contracts/state';
import { UsersState } from './ducks/users/contracts/state';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  posts: PostState;
  user: UserState;
  users: UsersState;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
