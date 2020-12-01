import { Action } from "redux";
import { LoadingState } from "../../types";
import {  PostState } from "./contracts/state";

export enum PostActionType{
  SET_POSTS = "posts/SET_POSTS",
  FETCH_POST = "posts/FETCH_POST",
  SET_LOADING_STATE = "posts/SET_LOADING_STATE"
}

export interface  SetPostActionInterface extends Action<PostActionType>{
  type: PostActionType.SET_POSTS;
  payload: PostState['items'],
}

export interface  FetchPostActionInterface extends Action<PostActionType>{
  type: PostActionType.FETCH_POST;
}
export interface  SetPostLoadinStateActionInterface extends Action<PostActionType>{
  type: PostActionType.SET_LOADING_STATE;
  payload: LoadingState
}

export const setPost = (payload: PostState['items']): SetPostActionInterface =>({
  type:PostActionType.SET_POSTS,
  payload,
})

export const setPostLoadingState = (payload:LoadingState): SetPostLoadinStateActionInterface =>({
  type:PostActionType.SET_LOADING_STATE,
  payload,
})

export const fetchPosts = (): FetchPostActionInterface =>({
  type:PostActionType.FETCH_POST,
})

export type PostActions = SetPostActionInterface | FetchPostActionInterface |SetPostLoadinStateActionInterface;
