import React from 'react';
import { useSelector } from 'react-redux';
import { SelectPostItems } from '../../store/ducks/posts/selectors';
import Post from '../Post';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function PostFull() {
  const href = window.location.href.toString();
  let idPost = href.split('http://localhost:3000/home/post/');
  let postFull;

  const posts = useSelector(SelectPostItems);

  // eslint-disable-next-line array-callback-return
  posts.findIndex((obj) => {
    if (obj._id === idPost[1]) {
      return (postFull = (
        <Post
          text={obj.text}
          user={obj.user}
          image={obj.imageUrl}
          published={obj.published}
          className="post"
          _idUs={obj.userID}
        />
      ));
    } else {
      postFull = 'error';
    }
  });
  return (
    <div className="wrapper_full_post">
      <aside onClick={() => window.history.back()}>
        <ArrowBackIosIcon />
      </aside>
      {postFull}
    </div>
  );
}

export default PostFull;
