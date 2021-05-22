import React from 'react';
import { useHistory } from 'react-router-dom';

const UserNameTag = ({ username }) => {
  const history = useHistory();

  const getTitleListByUsername = () => {
    history.push(`/posts/user/${username}`);
  }

  return (
    <div
      className="UserNameTag btn text-warning font-weight-bold ml-1"
      onClick={getTitleListByUsername}>
      {username}
    </div>
  )
}

export default UserNameTag;