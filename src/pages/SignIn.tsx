//libs
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

//img
import logo from '../assets/img/logo.png';

import { fetchSignIn } from '../store/ducks/user/actionCreators';
import { selectUserStatus } from '../store/ducks/user/selectors';
import { LoadingState } from '../store/types';
import { Notifcation } from '../components/Notification/Notification';
import { Color } from '@material-ui/lab/Alert';

//схема валидации
const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неверная почта').required('Введите почту'),
  password: yup.string().min(6, 'Минимум шесть символов').required(),
});

export interface LoginProps {
  email: string;
  password: string;
}

function SignIn() {
  const dispath = useDispatch();
  const loadingStatus = useSelector(selectUserStatus);
  //кастыль
  const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => {});
  const { register, handleSubmit } = useForm<LoginProps>({
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (data: LoginProps) => {
    dispath(fetchSignIn(data));
  };

  React.useEffect(() => {
    if (loadingStatus === LoadingState.SUCCESS) {
      openNotificationRef.current('Success authorization!', 'success');
    } else if (loadingStatus === LoadingState.ERROR) {
      openNotificationRef.current('Wrong login or password', 'error');
    }
  }, [loadingStatus]);

  return (
    <Notifcation>
      {(callback) => {
        openNotificationRef.current = callback;
        return (
          <div className="signIn_ligth">
            <div className="signIn_ligth_bg"></div>
            <div className="signIn_ligth_form">
              <div className="logo">
                <img src={logo} alt="Logo" className="logo_img" />
                <h1>Focus</h1>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} method="POST">
                <h2>Sign Up</h2>
                <span>
                  <input
                    name="email"
                    type="email"
                    placeholder="Mail"
                    ref={register}
                    className="input_ligth"
                  />
                </span>
                <span>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    ref={register}
                    className="input_ligth"
                  />
                </span>
                <span>
                  <button type="submit" className="button_ligth">
                    Sign in
                  </button>
                </span>
                <span>
                  <ul>
                    <li>
                      <Link to="/registration">Registration</Link>
                    </li>
                  </ul>
                </span>
              </form>
              <footer>
                <p>Focus - all rights reserved 2020.</p>
              </footer>
            </div>
          </div>
        );
      }}
    </Notifcation>
  );
}

export default SignIn;
