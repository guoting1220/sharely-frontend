import React from 'react';
import { useHistory } from 'react-router-dom';

const UserNameTag = ({ username }) => {
  const history = useHistory();

  const getTitleListByUsername = () => {
    history.push(`/posts/user/${username}`);
  }

  return (
    <i
      className="UserNameTag text-primary font-weight-bold ml-1"
      onClick={getTitleListByUsername}>
      {username}
    </i>
  )
}

export default UserNameTag;