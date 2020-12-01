import {  call, put, takeLatest } from 'redux-saga/effects'
import {  PostAPI } from '../../../services/api/postApi';
import { LoadingState } from '../../types';
import { PostActionType, setPost, setPostLoadingState } from './actionCreators';


export function* fetchPostRequest() {
  try{
    const items  = yield call(PostAPI.fetchPost);
    yield put(setPost(items))
  }catch(error){
    yield put(setPostLoadingState(LoadingState.ERROR))
  }
}

export function* postsSaga() {
   yield takeLatest(PostActionType.FETCH_POST,fetchPostRequest);
}

