import { all } from 'redux-saga/effects';
import { postsSaga } from './ducks/posts/saga';
import { userSaga } from './ducks/user/saga';
import { UsersSaga } from './ducks/users/saga';

export default function* rootSaga() {
  yield all([postsSaga(), userSaga(), UsersSaga()]);
}
