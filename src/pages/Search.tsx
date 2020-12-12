import React from 'react';
import { Navigation, ProfileIntro } from '../components';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/ducks/users/actionCreators';
import { selectUsers } from '../store/ducks/users/selectors';
import { Link } from 'react-router-dom';

const SearchFormSchema = yup.object().shape({
  username: yup.string().required('Введите логин').min(5, 'Минимум пять символов'),
});

export interface SearchProps {
  username: string | undefined;
}

//TODO дикая хрень,нцжно юзать Redux
function Search() {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  //referents
  const { register, handleSubmit } = useForm<SearchProps>({
    resolver: yupResolver(SearchFormSchema),
  });

  const onSubmit = async (data: SearchProps): Promise<void> => {};

  return (
    <div className="search_wrapper">
      <Navigation />
      <div className="search">
        <div className="search_block">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Поиск пользователей</h2>
            <span>
              <input type="text" placeholder="Имя пользователя" ref={register} name="username" />
            </span>
            <span>
              <button type="submit" className="button_ligth">
                Найти
              </button>
            </span>
          </form>

          {users.data.map((user) => (
            <span>
              <Link to={`user/${user._id}`} key={user._id}>
                <ProfileIntro
                  edit={false}
                  className="profile_intro_Search"
                  fullname={user?.fullname}
                  username={user?.username}
                  avatar={user.avatarUrl}
                />
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
