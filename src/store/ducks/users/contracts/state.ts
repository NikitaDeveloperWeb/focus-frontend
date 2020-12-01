import { LoadingState } from '../../../types';

export interface Users {
  id?: string | undefined;
  _id?: string;
  username?: string;
  fullname?: string;
  date?: string;
  avatarUrl?: string;
  email?: string;
}

export interface UsersState {
  data: Users[];
  loadingState: LoadingState;
}
