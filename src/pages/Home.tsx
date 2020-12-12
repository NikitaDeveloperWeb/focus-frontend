import React from 'react';
import { Navigation, ProfileIntro, StoryImage } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '../store/ducks/user/selectors';
import { SelectPostItems } from '../store/ducks/posts/selectors';
import { fetchPosts } from '../store/ducks/posts/actionCreators';
import { Post } from '../store/ducks/posts/contracts/state';

function Home() {
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();

  const post = useSelector(SelectPostItems);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let postArray: Post[] = [];
  // eslint-disable-next-line array-callback-return
  post.map((post) => {
    if (post.userID === user?._id) {
      postArray.push(post);
    }
  });
  return (
    <div className="home_ligth">
      <Navigation />
      <div className="content" id="content_block">
        <ProfileIntro
          _id={user?._id}
          avatar={user?.avatarUrl}
          className="profile_intro_ligth"
          username={user?.username}
          fullname={user?.fullname}
          date={user?.date}
          edit={true}
        />
        <div className="storyImage">
          <h2>Мои фотографии</h2>
          <ul>
            {postArray.map((post, index) => (
              <StoryImage
                imageUrl={post.imageUrl}
                id={post._id}
                key={`${post._id}+${index}+${user?._id}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
