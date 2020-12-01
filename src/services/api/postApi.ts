import axios from "axios";
import { PostState } from "../../store/ducks/posts/contracts/state";



export const PostAPI = {
    fetchPost(): Promise<PostState['items']>{ 
    return axios.get('http://localhost:8888/posts').then(({data})=>data); 
  }
}