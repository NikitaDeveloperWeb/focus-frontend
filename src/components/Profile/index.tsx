import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, ProfileIntro, StoryImage } from '..';
import { fetchPosts } from '../../store/ducks/posts/actionCreators';
import { Post } from '../../store/ducks/posts/contracts/state';
import { SelectPostItems } from '../../store/ducks/posts/selectors';
import { selectUsers } from '../../store/ducks/users/selectors';

function Profile() {
  const href = window.location.href.toString();
  let idUser = href.split('http://localhost:3000/home/user/');

  let profile;
  let userid;
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const post = useSelector(SelectPostItems);

  // eslint-disable-next-line array-callback-return
  users.data.findIndex((obj) => {
    if (obj._id === idUser[1]) {
      userid = obj._id;
      return (profile = (
        <ProfileIntro
          _id={obj?.id}
          avatar={obj?.avatarUrl}
          className="profile_intro_ligth"
          username={obj?.username}
          fullname={obj?.fullname}
          date={obj?.date}
          edit={false}
        />
      ));
    } else {
      profile = 'error';
    }
  });

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let postArray: Post[] = [];
  // eslint-disable-next-line array-callback-return
  post.map((post) => {
    if (post.userID === userid) {
      postArray.push(post);
    }
  });
  return (
    <div className="home_ligth">
      <Navigation />
      <div className="content" id="content_block">
        {profile}
        <div className="storyImage">
          <h2>Photo</h2>
          <ul>
            {postArray.map((post) => (
              <StoryImage imageUrl={post.imageUrl} id={post._id} key={post._id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
