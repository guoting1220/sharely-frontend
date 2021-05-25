import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import PostDetail from './PostDetail';
import PostForm from './PostForm';
import CommentList from './CommentList';
import { getPostFromAPI, updatePostInAPI } from '../actions/postsActions';
import { showErr } from '../actions/errorsActions';
import LoadingSpinner from './LoadingSpinner';


const Post = () => {
  const posts = useSelector(store => store.posts);
  const postId = +(useParams().postId);
  const post = posts[postId];
  const [isEditing, setIsEditing] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  /* if the post is not in store, fetch it from API */
  useEffect(() => {
    const getPost = async () => {
      await dispatch(getPostFromAPI(postId));
    };
    if (!post) getPost();
  },
    // [dispatch, post, postId]
    // if include "post" in the dependencies, when delete a post, the post changes, will run the function inside useEffect again, therefore dispatch the FETCH_POST, and return undefined:"", error

    [dispatch, postId]
  );

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  }

  const update = async (postData) => {
    try {
      await dispatch(updatePostInAPI(postId, postData));
      toggleEdit();
      history.push(`/posts/${postId}`);
    }
    catch(e) {
      dispatch(showErr(e));
    }
  }

  const cancel = () => {
    history.push(`/posts/${postId}`);
    setIsEditing(false);
  }


  if (!post) return <LoadingSpinner />;

  return (
    <div className="Post">
      {isEditing
        ? <PostForm
          post={post}
          save={update}
          cancel={cancel}
          title="Edit Post"
        />
        : <PostDetail
          post={post}
          id={postId}
          toggleEdit={toggleEdit}
        />
      }
      <br />
      <CommentList postId={postId} comments={post.comments} />
    </div>
  )
}

export default Post;