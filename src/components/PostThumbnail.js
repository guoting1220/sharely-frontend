import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import InviteBtn from './InviteBtn';
import { defaultImageForFailedLoading } from '../config';



const PostThumbnail = ({ id }) => {
  const titles = useSelector(store => store.titles);
  const title = titles.filter(title => title.id === id)[0];

  return (
    <div className="PostThumbnail mx-1">
      <div className="card mb-1" style={{ width: '6rem' }}>
        <Link className="link" exact to={`/posts/${id}`}>
          <img
            src={title.imgUrl}
            className="card-img-top h-25"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImageForFailedLoading
            }}
            alt="...">
          </img>
        </Link>

        <div className="card-body p-1">
          <Link className="link" exact to={`/posts/${id}`}>
            <small className="card-text">{title.itemName}</small>
          </Link>
        </div>
      </div>
      <InviteBtn postId={id} postOwner={title.username} />
    </div>
  );
}

export default PostThumbnail;

