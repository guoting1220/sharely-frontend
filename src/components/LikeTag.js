import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { likePost, unLikePost } from '../actions/userActions';

const LikeTag = ({ postId }) => {
  const currentUserName = useSelector(store => store.user.username);
  const likeSet = new Set(useSelector(store => store.user.likedPosts));
  const dispatch = useDispatch();

  const likeHeart = likeSet.has(postId) ?
    <i className="fas fa-heart liked"></i>
    : <i className="far fa-heart"></i>

  const toggleLike = () => {
    if (!likeSet.has(postId)) {
      dispatch(likePost(currentUserName, postId));
    }
    else
      dispatch(unLikePost(currentUserName, postId));    
  }

  return (
    <div className="LikeTag btn fa-lg" onClick={toggleLike}>
      {likeHeart}
    </div>
  )
}

export default LikeTag;