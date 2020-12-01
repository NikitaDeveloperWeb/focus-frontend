import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { Link } from 'react-router-dom';
import { selectUsers } from '../../store/ducks/users/selectors';
import { useSelector } from 'react-redux';

interface PostProps {
  _idUs: string;
  image?: string;
  text: string;
  user?: string;
  published?: string;
  className?: string;
}

function Post({ image, text, user, published, className, _idUs }: PostProps) {
  //открытие и закрытие статьи
  const [open, setOpen] = React.useState(false);
  let userLink;
  const openText = (state: boolean) => {
    setOpen(!state);
  };
  //лайк
  const [like, setLike] = React.useState(false);
  // let count: number = 0;
  const likePost = (state: boolean) => {
    setLike(!state);
  };
  const users = useSelector(selectUsers);
  // eslint-disable-next-line array-callback-return
  users.data.findIndex((obj) => {
    if (obj._id === _idUs) {
      return (userLink = <Link to={`/home/user/${obj._id}`}>{'@' + user}</Link>);
    } else {
      userLink = 'error';
    }
  });

  return (
    <ul className={className}>
      <li>
        <img src={image} alt="" />
        <p className={open ? 'open' : 'close'}>{text}</p>
        <button onClick={() => openText(open)}>{open ? 'close' : 'open'}</button>
        <div className="data_of_post">
          <h3>{userLink}</h3>
          <h2>{published}</h2>
          <div className="icons_post">
            <ThumbUpAltIcon
              onClick={() => likePost(like)}
              className={like ? 'activeLike' : 'disabletLike'}
            />
          </div>
        </div>
      </li>
      <div className="fullpost"></div>
    </ul>
  );
}

export default Post;
