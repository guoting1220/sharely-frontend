import React from "react";
import { Link } from 'react-router-dom';
import LikeTag from './LikeTag';
import InviteBtn from './InviteBtn';
import { useSelector, useDispatch } from 'react-redux';
import { defaultImageForFailedLoading } from '../config';


const PostCard = ({ id, itemName, username, postDate, city, imgUrl, category, ageGroup }) => {
  const currentUserName = useSelector(store => store.user.username);

  return (
    <div className="PostCard col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="card" style={{ width: '15rem' }}>
        <Link className="link" exact to={`/posts/${id}`}>
          <img
            src={imgUrl}
            className="card-img-top"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImageForFailedLoading
            }}
            alt="Loading...">
          </img>
        </Link>

        {currentUserName && <LikeTag postId={id} />}

        <div className="card-body">
          <Link className="link" exact to={`/posts/${id}`}>
            <h5 className="card-title m-0">{itemName}</h5>
          </Link>

          <div>
            <small className="card-text">
              <i className="text-success">{city} </i>
              <i>  {postDate}</i>
            </small>
          </div>

          <div className="d-flex justify-content-between">
            <small>Category:<span className="mr-2 ml-1 badge badge-secondary font-weight-normal">{category}</span></small>
            <small>Age:<span className="ml-1 badge badge-info font-weight-normal">{ageGroup}</span></small>
          </div>
          <hr />
          {currentUserName && <InviteBtn postId={id} postOwner={username} />}
        </div>
      </div>
    </div>
  );
}

export default PostCard;

