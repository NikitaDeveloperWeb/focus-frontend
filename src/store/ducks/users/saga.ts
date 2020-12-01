import { call, put, takeLatest } from 'redux-saga/effects';
import { usersAPI } from '../../../services/api/usersAPI';
import { LoadingState } from '../../types';
import { UserActionType, setUser, setUserLoadingState } from './actionCreators';

export function* fetchUserRequest() {
  try {
    const items = yield call(usersAPI.fetchUser);
    yield put(setUser(items));
  } catch (error) {
    yield put(setUserLoadingState(LoadingState.ERROR));
  }
}

export function* UsersSaga() {
  yield takeLatest(UserActionType.FETCH_User, fetchUserRequest);
}
