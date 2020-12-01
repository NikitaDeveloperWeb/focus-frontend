import { LoadingState } from '../../../types';

export interface Post {
  _id: string;
  text: string;
  user: string;
  userID: string;
  published: string;
  imageUrl: string;
}

export interface PostState {
  items: Post[];
  loadingState: LoadingState;
}
