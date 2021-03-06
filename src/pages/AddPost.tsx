import React from 'react';
import { Navigation } from '../components';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { selectUserData } from '../store/ducks/user/selectors';
import { useHistory } from 'react-router-dom';

//схема валидации
const AddPostFormSchema = yup.object().shape({
  text: yup.string(),
  imagerUrl: yup.string(),
});

export interface PostProps {
  userID?: string;
  text: string;
  imageUrl: string;
  published: string;
  user: string | undefined;
}

function AddPost() {
  const { register, handleSubmit } = useForm<PostProps>({
    resolver: yupResolver(AddPostFormSchema),
  });
  const user = useSelector(selectUserData);
  const history = useHistory();
  const onSubmit = async (data: PostProps) => {
    try {
      data.user = user?.username;
      data.published = new Date().toUTCString();
      axios.post('https://focus-network.herokuapp.com/post/', data);
      history.push('/home');
    } catch (error) {}
  };
  return (
    <div className="add_edit_form">
      <Navigation />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Добавить пост</h2>
        <span>
          <textarea
            name="text"
            ref={register}
            className="input_ligth"
            placeholder="Текст"></textarea>
        </span>
        <span>
          <input
            type="text"
            name="imageUrl"
            ref={register}
            className="input_ligth"
            placeholder="URL фото"
          />
        </span>
        <span>
          <button type="submit" className="button_ligth">
            Добавить
          </button>
        </span>
      </form>
    </div>
  );
}

export default AddPost;
