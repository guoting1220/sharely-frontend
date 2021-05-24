import { FETCH_POST, ADD_POST, UPDATE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from '../actions/actionTypes'

export default function postsReducer(state = {}, action) {
  /* make deep copy of original state */
  const copyState = () => {
    const postsCopy = {};

    Object.keys(state).forEach(id => {
      postsCopy[id] = { ...state[id] };
      postsCopy[id].comments = postsCopy[id].comments.map(
        comment => ({ ...comment }));
    });

    return postsCopy;
  }


  switch (action.type) {
    case FETCH_POST: {
      const postsCopy = copyState();
      postsCopy[action.post.id] = action.post;
      return postsCopy;
    }


    case ADD_POST: {
      const postsCopy = copyState();
      const id = action.postData.id;
      postsCopy[id] = action.postData;
      postsCopy[id].comments = [];
      return postsCopy;
    }


    case UPDATE_POST: {
      const postsCopy = copyState();
      const id = action.postId;
      postsCopy[id] = { ...postsCopy[id], ...action.postData };
      return postsCopy;
    }


    case DELETE_POST: {
      const postsCopy = copyState();
      delete postsCopy[action.postId];
      return postsCopy;
    }


    case ADD_COMMENT: {
      const postsCopy = copyState();
      postsCopy[action.postId].comments = [
        action.commentData,
        ...postsCopy[action.postId].comments        
      ]
      return postsCopy;
    }


    case DELETE_COMMENT: {
      const postsCopy = copyState();
      postsCopy[action.postId].comments = postsCopy[action.postId].comments.filter(
        comment => (comment.id !== action.commentId));
      return postsCopy;
    }


    default:
      return state;
  }
}
