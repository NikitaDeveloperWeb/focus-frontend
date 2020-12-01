import {  call, put, takeLatest } from 'redux-saga/effects'
import { AuthApi } from '../../../services/api/authAPI';
import { LoadingState } from '../../types';
import {  setUserData, setUserLoadingStatus } from './actionCreators';
import { FetchSignInActionInterface, UserActionType } from './contracts/actionTypes';


export function* fetchSignInRequest({payload}:FetchSignInActionInterface) {
  try{
    const {data,}  = yield call(AuthApi.signIn,payload);
    window.localStorage.setItem('token',data.token)
    yield put(setUserData(data))

  }catch(error){
    yield put(setUserLoadingStatus(LoadingState.ERROR))
  }
}

export function* userSaga() {
   yield takeLatest(UserActionType.FETCH_SIGN_IN,fetchSignInRequest);
}

