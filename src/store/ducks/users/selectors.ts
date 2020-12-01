import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { UsersState } from './contracts/state';

export const selectUsers = (state: RootState): UsersState => state.users;

export const selectLoadingState = (state: RootState) => selectUsers(state).loadingState;

export const SelectUserItems = createSelector(selectUsers, (Users) => Users.data);
