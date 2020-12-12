import React from 'react';
import { Navigation } from '../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { selectUserData } from '../store/ducks/user/selectors';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const EditFormSchema = yup.object().shape({
  username: yup.string(),
  fullname: yup.string(),
  date: yup.string(),
  avatarUrl: yup.string(),
});

export interface EditProps {
  username: string | undefined;
  fullname: string | undefined;
  date: string | undefined;
  avatarUrl: string | undefined;
}

function Edit() {
  //referents
  const { register, handleSubmit } = useForm<EditProps>({
    resolver: yupResolver(EditFormSchema),
  });
  const history = useHistory();
  const user = useSelector(selectUserData);
  const onSubmit = async (data: EditProps): Promise<void> => {
    try {
      await axios.patch(`https://focus-network.herokuapp.com/edit/user/${user?._id}`, data);
      window.location.reload();
      history.push('/home');
    } catch (error) {
      console.log(`😱 Axios request failed: ${error}`);
    }
  };

  return (
    <div className="add_edit_form">
      <Navigation />
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h2>Редактировать профиль</h2>
        <span>
          <input
            type="text"
            placeholder="Имя пользователя"
            name="username"
            className="input_ligth_add"
            ref={register}
          />
        </span>
        <span>
          <input
            type="text"
            placeholder="Полное имя"
            className="input_ligth_add"
            name="fullname"
            ref={register}
          />
        </span>
        <span>
          <input
            type="date"
            placeholder="Дата"
            className="input_ligth_add"
            name="date"
            ref={register}
          />
        </span>
        <span>
          <input
            type="text"
            placeholder="URL аватара"
            className="input_ligth_add"
            name="avatarUrl"
            ref={register}
          />
        </span>
        <span>
          <button type="submit" className="button_ligth">
            Редактировать
          </button>
        </span>
      </form>
    </div>
  );
}

export default Edit;
