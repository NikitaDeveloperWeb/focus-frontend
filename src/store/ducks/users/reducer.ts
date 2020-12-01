import produce, { Draft } from 'immer';
import { LoadingState } from '../../types';
import { UserActions, UserActionType } from './actionCreators';
import { UsersState } from './contracts/state';

const initialUserState: UsersState = {
  data: [],
  loadingState: LoadingState.NEVER,
};

export const UsersReducer = produce((draft: Draft<UsersState>, action: UserActions) => {
  switch (action.type) {
    case UserActionType.SET_UserS:
      draft.data = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case UserActionType.FETCH_User:
      draft.data = [];
      draft.loadingState = LoadingState.LOADING;
      break;

    case UserActionType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;
    default:
      break;
  }
}, initialUserState);
