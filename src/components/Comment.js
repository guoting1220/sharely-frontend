import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentFromAPI } from '../actions/postsActions';

const Comment = ({ postId, commentId, text, username, commentDate }) => {
  const currentUsername = useSelector(store => store.user.username);

  const dispatch = useDispatch();

  const removeComment = () => {
    dispatch(deleteCommentFromAPI(postId, commentId));
  }

  const deleteBtn = currentUsername === username
    ? <i
      className="btn fas fa-times deleteBtn m-2 text-danger"
      onClick={removeComment}>
    </i>
    : null


  return (
    <div className="Comment w-100 text-left d-flex  border-bottom py-2">
      <div>
        {deleteBtn}
      </div>
      <div >
        <div>
          <small className="text-left font-weight-light font-italic text-info">
            {username} - {commentDate}
          </small>
        </div>

        <div>
          {text}
        </div>
      </div>
    </div>
  )
}

export default Comment;