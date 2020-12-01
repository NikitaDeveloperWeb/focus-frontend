import axios from 'axios';
import { PostState } from '../../store/ducks/posts/contracts/state';

export const usersAPI = {
  fetchUser(): Promise<PostState['items']> {
    return axios.get('http://localhost:8888/users').then(({ data }) => data);
  },
};
