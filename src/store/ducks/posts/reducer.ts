import  produce, { Draft } from "immer";
import { LoadingState } from "../../types";
import { PostActions, PostActionType } from "./actionCreators";
import {  PostState } from "./contracts/state";


const initialPostState: PostState = {
  items:[],
  loadingState: LoadingState.NEVER,
}

export const postReducer = produce((draft:Draft<PostState>,action:PostActions) =>{
  switch (action.type) {
    case PostActionType.SET_POSTS :
      draft.items = action.payload
      draft.loadingState = LoadingState.LOADED
      break;

      case PostActionType.FETCH_POST :
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
      break;

    case PostActionType.SET_LOADING_STATE :
      draft.loadingState = action.payload
      break;
    default:
      break;
  }
},initialPostState);