import { LoginProps } from "../../../pages/SignIn";
import { FetchSignInActionInterface, SetUserDataActionInterface, SetUserLoadingStateActionInterface, UserActionType } from "./contracts/actionTypes";
import { UserState } from "./contracts/state";

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface =>({
    type: UserActionType.SET_USER_DATA,
    payload,
})

export const fetchSignIn = (payload: LoginProps): FetchSignInActionInterface =>({
  type: UserActionType.FETCH_SIGN_IN,
  payload,
})


export const setUserLoadingStatus = (payload: UserState['status']): SetUserLoadingStateActionInterface =>({
  type: UserActionType.SET_LOADING_STATE,
  payload,
})

export type UserActions = SetUserDataActionInterface | SetUserLoadingStateActionInterface;