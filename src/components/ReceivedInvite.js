import React from 'react';
import PostThumbnail from './PostThumbnail';
import UserNameTag from './UserNameTag';


const ReceivedInvite = ({ username, posts }) => {
  return (
    <div className="ReceivedInvite bg-light d-flex justify-content-start p-1 my-3 border round">
      <div className="align-self-center mx-3">
        <UserNameTag username={username} />
      </div>

      <div className="align-self-center mr-2">
        <div>is interested in your posts </div>
      </div>

      <div className="align-self-center d-flex">
        {posts.map(pid =>
          <PostThumbnail key={pid} id={pid} />
        )}
      </div>
      <hr />
    </div>
  )
}

export default ReceivedInvite;