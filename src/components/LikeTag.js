import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { likePost, unLikePost } from '../actions/userActions';
import { useHistory } from 'react-router';

const LikeTag = ({ postId }) => {
  const currentUserName = useSelector(store => store.user.username);
  const likeSet = new Set(useSelector(store => store.user.likedPosts));
  const dispatch = useDispatch();
  const history = useHistory();

  const likeHeart = likeSet.has(postId) ?
    <i className="fas fa-heart liked" data-toggle="tooltip" title="remove favorite"></i>
    : <i className="far fa-heart" data-toggle="tooltip" title="save as favorite"></i>

  const toggleLike = () => {
    if (currentUserName) {
      if (!likeSet.has(postId)) {
        dispatch(likePost(currentUserName, postId));
      }
      else
        dispatch(unLikePost(currentUserName, postId));
    }
    else {
      history.push("/login");
    }
  }

  return (
    <div className="LikeTag btn fa-lg" onClick={toggleLike}>
      {likeHeart}
    </div>
  )
}

export default LikeTag;