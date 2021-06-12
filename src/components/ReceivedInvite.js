import React from 'react';
import PostThumbnail from './PostThumbnail';
import UserNameTag from './UserNameTag';


const ReceivedInvite = ({ username, posts }) => {
  return (
    <div className="ReceivedInvite bg-light p-3 my-3 border round">
      <div className="font-weight-bold text-secondary mb-4">
        <UserNameTag username={username} /> is interested in your posts:
      </div>

      <div className="row ">
        {posts.map(pid =><div className="col-4 col-md-3 col-lg-2 "><PostThumbnail key={pid} id={pid} /></div>)}
      </div>
    </div>
  )
}

export default ReceivedInvite;