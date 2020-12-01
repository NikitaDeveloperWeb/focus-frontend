import { Action } from "redux";
import { LoginProps } from "../../../../pages/SignIn";
import { LoadingState } from "../../../types";
import { User } from "./state";

export enum UserActionType{
  SET_USER_DATA = "user/SET_USER_DATA",
  SET_LOADING_STATE = "user/SET_LOADING_STATE",
  FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
}

export interface  FetchSignInActionInterface extends Action<UserActionType>{
  type: UserActionType.FETCH_SIGN_IN;
  payload: User | LoginProps,
}

export interface  SetUserDataActionInterface extends Action<UserActionType>{
  type: UserActionType.SET_USER_DATA;
  payload: User | undefined,
}


export interface  SetUserLoadingStateActionInterface extends Action<UserActionType>{
  type: UserActionType.SET_LOADING_STATE;
  payload: LoadingState,
}

