import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { deletePostFromAPI } from '../actions/postsActions';
import LikeTag from './LikeTag';
import InviteBtn from './InviteBtn';
import { defaultImageForFailedLoading } from '../config';


const PostDetail = ({ id, post, toggleEdit }) => {
  const currentUsername = useSelector(store => store.user.username);

  const { itemName, username, postDate, city, imgUrl, category, ageGroup, description } = post;

  const dispatch = useDispatch();
  const history = useHistory();

  const remove = async () => {
    await dispatch(deletePostFromAPI(id));
    history.push("/posts");
  }

  return (
    <div className="PostDetail d-flex justify-content-center">
      <div className="w-50 card mt-3 p-3 row">
        <div className="col-6 mx-auto">
          <img 
          src={imgUrl} 
          className="img-thumbnail mx-auto" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImageForFailedLoading
            }}
          alt="Loading..."></img>
        </div>
        
        <LikeTag postId={id} />

        {currentUsername === post.username ?
          <div className="d-flex justify-content-between w-50 mx-auto my-2">
            <button className="btn btn-sm btn-outline-success fas fa-edit editBtn" onClick={toggleEdit}></button>
            <button className="btn btn-sm btn-outline-danger fas fa-times deleteBtn" onClick={remove}></button>
          </div>
          : null
        }

        <h2>{itemName}</h2>

        <p>{description}</p>

        <InviteBtn postId={id} postOwner={username} />
        <div className="d-flex justify-content-around w-50 mx-auto">
          <p><b>Category</b>:<span className="mr-2 ml-1 badge badge-secondary font-weight-normal">{category}</span></p>
          <p><b>Age</b>:<span className="ml-1 badge badge-info font-weight-normal">{ageGroup}</span></p>
        </div>

        <div className="d-flex w-50 justify-content-around mx-auto">
          <small className="card-text">
            User: <i className="text-warning">{username}</i>
          </small>
          <small className="card-text">
            Location: <i className="text-success">{city}</i>
          </small>
          <small><i className="">{postDate}</i></small>
        </div>
      </div>
    </div>
  )
}

export default PostDetail;