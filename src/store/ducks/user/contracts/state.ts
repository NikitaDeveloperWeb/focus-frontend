import { LoadingState } from '../../../types';

export interface User {
  _id: string;
  email: string;
  username: string;
  password: string;
  avatarUrl?: string;
  confirmHash: string;
  confirmed?: boolean;
  fullname: string;
  date: string;
}

export interface UserState {
  data: User | undefined;
  status: LoadingState;
}
