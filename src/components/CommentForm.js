import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendCommentToAPI } from '../actions/postsActions';

const CommentForm = ({ postId }) => {
  const [commentText, setCommentText] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCommentText(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(sendCommentToAPI(postId, commentText));
    setCommentText("");
  }

  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex">
          <input className="form-control shadow-sm rounded"
            type="text"
            name="commentContent"
            value={commentText}
            placeholder="New Comment"
            onChange={handleChange}
          ></input>
          <button className="btn btn-info">Add</button>
        </div>
      </form>
    </div>
  )
}

export default CommentForm;