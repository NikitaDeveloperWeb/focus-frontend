import React from 'react';
import { Navigation, Post } from '../components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/ducks/posts/actionCreators';
import { SelectPostItems } from '../store/ducks/posts/selectors';

function News() {
  const dispatch = useDispatch();
  let post = useSelector(SelectPostItems);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="news">
      <Navigation />
      <div className="news_block">
        <h1>News</h1>
        {post.map((post) => (
          <Post
            text={post.text}
            key={post._id}
            user={post.user}
            published={post.published}
            image={post.imageUrl}
            className="post"
            _idUs={post.userID}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
