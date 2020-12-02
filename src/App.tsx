//libs
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { PostFull, Profile } from './components';
//pages
import { Home, News, SignIn, SignUp, Search, AddPost, EditPage } from './pages';
import { AuthApi } from './services/api/authAPI';
import { SelectPostItems } from './store/ducks/posts/selectors';
import { setUserData } from './store/ducks/user/actionCreators';
import { selectIsAuth } from './store/ducks/user/selectors';
import { selectUsers } from './store/ducks/users/selectors';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUsers);
  const post = useSelector(SelectPostItems);
  const checkAuth = async () => {
    try {
      const { data } = await AuthApi.getMe();
      dispatch(setUserData(data));
      history.replace('/home');
    } catch (error) {}
  };
  React.useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    if (isAuth) {
      history.push('/home');
    }
  }, [history, isAuth]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/registration" component={SignUp} />
        <Route exact path="/home" component={isAuth ? Home : SignIn} />
        <Route exact path="/home/news" component={isAuth ? News : SignIn} />
        <Route exact path="/home/search" component={isAuth ? Search : SignIn} />
        <Route exact path="/home/add" component={isAuth ? AddPost : SignIn} />
        <Route exact path="/home/edit/" component={isAuth ? EditPage : SignIn} />
        <Route exact path={`/home/user/${user.data}`} component={isAuth ? EditPage : SignIn} />
        {user.data.map((user) => (
          <Route exact path={`/home/user/${user._id}`} component={isAuth ? Profile : SignIn} />
        ))}

        {post.map((post) => (
          <Route exact path={`/home/post/${post._id}`} component={isAuth ? PostFull : SignIn} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
