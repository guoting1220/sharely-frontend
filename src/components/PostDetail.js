import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { deletePostFromAPI } from '../actions/postsActions';
import LikeTag from './LikeTag';
import GroupTag from './GroupTag';
import UserNameTag from './UserNameTag';
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
    <div className="PostDetail row d-flex justify-content-center">
      <div className="col-8 card mt-3 p-3">
        <div className="w-75 mx-auto">
          <img
            src={imgUrl}
            className="img-thumbnail mx-auto d-block"
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

        <h5>{itemName}</h5>

        <p>{description}</p>

        <InviteBtn postId={id} postOwner={username} />

        <div className="container row text-center mt-3 mx-auto d-flex justify-content-center">
          <small className="col-md-6 col-lg-3">
            Category:<GroupTag grouptype="category" value={category} color="warning" />
          </small>
          <small className="col-md-6 col-lg-3">
            Age:<GroupTag grouptype="ageGroup" value={ageGroup} color="info" />
          </small>          
          <small className="col-md-6 col-lg-3">
            City: <GroupTag grouptype="city" value={city} color="success" />
          </small>
          <small className="col-md-6 col-lg-3">
            User: <UserNameTag username={username} />
          </small>
          <small className="col-md-6 col-lg-3"><i>{postDate}</i></small>
        </div>


      </div>
    </div>
  )
}

export default PostDetail;