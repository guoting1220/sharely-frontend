import { FETCH_POST, ADD_POST, UPDATE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';
import SharelyApi from '../api/api';
import { showErr } from './errorsActions';

/* "thunk" action creactor */

/* get post action */
/* get post from API, then add to the state store */
export const getPostFromAPI = (id) => (
  async (dispatch) => {
    try {
      const post = await SharelyApi.getPost(id);
      dispatch(fetchPost(post))
    }
    catch (errors) {
      console.error("Getting posts fails.", errors);
      dispatch(showErr(errors));
    }
  }
)

export const fetchPost = (post) => (
  {
    type: FETCH_POST,
    post
  }
);


/* add post action */
/* send new post to API, and add to the state in store. */
export const sendPostToAPI = (postData) => (
  async (dispatch) => {
    try {
      const post = await SharelyApi.addPost(postData);
      dispatch(addNewPost(post));
    }
    catch (errors) {
      console.error("Adding post fails.", errors);
      dispatch(showErr(errors));
    }
  }
)

export const addNewPost = (postData) => (
  {
    type: ADD_POST,
    postData
  }
);


/* update post action */
/* update the post, and update the state in store */
export const updatePostInAPI = (postId, postData) => (
  async (dispatch) => {
    try {
      const updatedPost = await SharelyApi.updatePost(postId, postData);
      dispatch(updatePost(postId, updatedPost));
    }
    catch (errors) {
      console.error("Updating post fails.", errors);
      dispatch(showErr(errors));
    }
  }
)

export const updatePost = (postId, postData) => (
  {
    type: UPDATE_POST,
    postId,
    postData
  }
);


/* delete post action */
/* delete the post from API, and remove from the state in store */
export const deletePostFromAPI = (id) => (
  async (dispatch) => {
    try {
      await SharelyApi.deletePost(id);
      dispatch(removePost(id));
    }
    catch (errors) {
      console.error("Deleting post fails.", errors);
      dispatch(showErr(errors));
    }
  }
)

export const removePost = (postId) => (
  {
    type: DELETE_POST,
    postId
  }
);


/* add comment action */
/* add comment to API, and add to the state in store */
export const sendCommentToAPI = (postId, text) => (
  async (dispatch) => {
    try {
      const comment = await SharelyApi.addComment(postId, text);
      dispatch(addComment(postId, comment));
    }
    catch (errors) {
      console.error("Adding comment fails.", errors);
      dispatch(showErr(errors));
    }
  }
)

export const addComment = (postId, commentData) => (
  {
    type: ADD_COMMENT,
    postId,
    commentData
  }
);


/* delete comment action */
/* delete the comment from API, and remove from the state in store */
export const deleteCommentFromAPI = (postId, commentId) => (
  async (dispatch) => {
    try {
      await SharelyApi.removeComment(postId, commentId);
      dispatch(deleteComment(postId, commentId));
    }
    catch (errors) {
      console.error("Deleting comment fails.", errors);
      dispatch(showErr(errors));
    }
  }
)

export const deleteComment = (postId, commentId) => (
  {
    type: DELETE_COMMENT,
    commentId,
    postId
  }
);


