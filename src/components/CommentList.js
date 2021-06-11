import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentList = ({ postId, comments }) => {
  return (
    <div className="CommentList w-50 mx-auto">
      <h6 className="text-secondary text-left">Comments:</h6>

      <CommentForm postId={postId} />

      {comments.map(comment =>
        <Comment
          key={comment.id}
          commentId={comment.id}
          postId={postId}
          text={comment.text}
          username={comment.username}
          commentDate={comment.commentDate}
        />
      )}
    </div>
  )
}

export default CommentList;