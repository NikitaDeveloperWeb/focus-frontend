import axios from 'axios';
import { PostState } from '../../store/ducks/posts/contracts/state';

export const usersAPI = {
  fetchUser(): Promise<PostState['items']> {
    return axios.get('https://focus-network.herokuapp.com/users/').then(({ data }) => data);
  },
};
