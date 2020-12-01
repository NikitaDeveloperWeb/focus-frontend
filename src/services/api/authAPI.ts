import { axios } from '../../core/axios';
import { LoginProps } from '../../pages/SignIn';
interface ResponseApi {
  status: string;
  data: any;
}

export const AuthApi = {
  async signIn(postData: LoginProps): Promise<ResponseApi> {
    const { data } = await axios.post<ResponseApi>('http://localhost:8888/auth/login', {
      username: postData.email,
      password: postData.password,
    });
    return data;
  },
  async getMe(): Promise<ResponseApi> {
    const { data } = await axios.get<ResponseApi>('http://localhost:8888/users/me');
    return data;
  },
};
