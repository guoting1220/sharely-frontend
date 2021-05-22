import { FETCH_CURRENT_USER_AND_TOKEN, REMOVE_CURRENT_USER_AND_TOKEN, ADD_POST, DELETE_POST, LIKE, UNLIKE, INVITE, REMOVE_INVITE } from '../actions/actionTypes'



export default function userReducer(state = {}, action) {

  /* deep copy the original state */
  
  const copyUser = () => ({
    ...state,
    posts: [...state.posts],
    likedPosts: [...state.likedPosts],
    sentInvites: state.sentInvites.map(invite => ({ ...invite })),
    receivedInvites: state.receivedInvites.map(invite => ({ ...invite }))
  })


  switch (action.type) {
    case FETCH_CURRENT_USER_AND_TOKEN: {
      return {
        ...action.currentUser,
        token: action.token,
      };
    }


    case REMOVE_CURRENT_USER_AND_TOKEN: {
      return {};
    }


    case ADD_POST: {
      const newState = copyUser();
      newState.posts.push(action.postData.id);
      return newState;
    }

    case DELETE_POST: {
      const newState = copyUser();
      newState.posts = newState.posts.filter(
        pid => pid !== action.postId);
      return newState;
    }

    case LIKE: {
      const newState = copyUser();
      newState.likedPosts.push(action.postId);
      return newState;
    }


    case UNLIKE: {
      const newState = copyUser();
      newState.likedPosts = newState.likedPosts.filter(
        pid => pid !== action.postId);
      return newState;
    }

    case INVITE: {
      const newState = copyUser();
      newState.sentInvites.push(
        {
          postId: action.postId, postOwner: action.postOwner
        }
      );
      return newState;
    }


    case REMOVE_INVITE: {
      const newState = copyUser();
      newState.sentInvites = newState.sentInvites.filter(
        invite => invite.postId !== action.postId);
      return newState;
    }


    default:
      return state;
  }
}
