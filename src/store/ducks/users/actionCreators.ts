import { Action } from 'redux';
import { LoadingState } from '../../types';
import { UsersState } from './contracts/state';

export enum UserActionType {
  SET_UserS = 'Users/SET_UserS',
  FETCH_User = 'Users/FETCH_User',
  SET_LOADING_STATE = 'Users/SET_LOADING_STATE',
}

export interface SetUserActionInterface extends Action<UserActionType> {
  type: UserActionType.SET_UserS;
  payload: UsersState['data'];
}

export interface FetchUserActionInterface extends Action<UserActionType> {
  type: UserActionType.FETCH_User;
}
export interface SetUserLoadinStateActionInterface extends Action<UserActionType> {
  type: UserActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setUser = (payload: UsersState['data']): SetUserActionInterface => ({
  type: UserActionType.SET_UserS,
  payload,
});

export const setUserLoadingState = (payload: LoadingState): SetUserLoadinStateActionInterface => ({
  type: UserActionType.SET_LOADING_STATE,
  payload,
});

export const fetchUsers = (): FetchUserActionInterface => ({
  type: UserActionType.FETCH_User,
});

export type UserActions =
  | SetUserActionInterface
  | FetchUserActionInterface
  | SetUserLoadinStateActionInterface;
