import axios from 'axios';
import { PostState } from '../../store/ducks/posts/contracts/state';

export const PostAPI = {
  fetchPost(): Promise<PostState['items']> {
    return axios.get('https://focus-network.herokuapp.com/posts/').then(({ data }) => data);
  },
};
