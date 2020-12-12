import React from 'react';
import editIcon from '../../assets/img/PancelEdit.png';
import { Link } from 'react-router-dom';
interface ProfileIntroProps {
  _id?: string | undefined;
  avatar?: string | undefined;
  fullname: string | undefined;
  username: string | undefined;
  date?: string | undefined;
  className: string | undefined;
  edit: boolean | undefined;
}
function ProfileIntro({ avatar, fullname, username, date, className, edit }: ProfileIntroProps) {
  return (
    <div className={className}>
      <section>
        <img src={avatar} alt="" />
        <ul>
          <li>{fullname}</li>
          <li>{'@' + username}</li>
          <li>{date}</li>
          <li>
            <Link to="/home/edit" className={edit ? 'visable' : 'notVisable'}>
              <img src={editIcon} alt="" />
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ProfileIntro;
