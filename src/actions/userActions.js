// import axios from 'axios';
import { FETCH_CURRENT_USER_AND_TOKEN, REMOVE_CURRENT_USER_AND_TOKEN, LIKE, UNLIKE, INVITE, REMOVE_INVITE } from './actionTypes';
import SharelyApi from '../api/api';
import jwt from "jsonwebtoken";
import { showErr } from './errorsActions';

/* "thunk" action creactor */

/* get token from localStorage if there is, then update to the current user state */
export const getTokenFromLSAndGetCurrentUserFromAPI = () => (
  async (dispatch) => {
    const token = window.localStorage.getItem("sharely-token") || null;
    if (token) {
      try {
        let { username } = jwt.decode(token);
        // put the token on the Api class so it can use it to call the API.
        SharelyApi.token = token;
        let currentUser = await SharelyApi.getUser(username);
        dispatch(fetchCurrentUserAndToken(token, currentUser));
      }
      catch (errors) {
        console.error("Loading user ino fails.", errors);
        dispatch(showErr(errors));
      }
    }
  }
)

export const fetchCurrentUserAndToken = (token, currentUser) => (
  {
    type: FETCH_CURRENT_USER_AND_TOKEN,
    token,
    currentUser
  }
);


/* log out the user, remove the token stored in the localStorage, then update the state store */
export const logout = () => (
  (dispatch) => {
    try {
      window.localStorage.removeItem("sharely-token");
      dispatch(removeCurrentUserAndToken());
    }
    catch (errors) {
      console.error("UnLoading user ino fails.", errors);
      dispatch(showErr(errors));
    }
  }
)

export const removeCurrentUserAndToken = () => (
  {
    type: REMOVE_CURRENT_USER_AND_TOKEN
  }
);


/* register the user, send user data to the DB, update the state store */
export const signUp = (userData) => (
  async (dispatch) => {
    try {
      let token = await SharelyApi.signup(userData);
      if (token) {
        let { username } = jwt.decode(token);
        // put the token on the Api class so it can use it to call the API.
        SharelyApi.token = token;
        window.localStorage.setItem("sharely-token", token);
        let currentUser = await SharelyApi.getUser(username);
        dispatch(fetchCurrentUserAndToken(token, currentUser));
      }
    }
    catch (errors) {
      console.error("Signup failed", errors);
      dispatch(showErr(errors));
    }
  }
)


/* user login, update the state store */
export const logIn = (userData) => (
  async (dispatch) => {
    try {
      let { token, user } = await SharelyApi.login(userData);
      window.localStorage.setItem("sharely-token", token);
      SharelyApi.token = token;
      let currentUser = await SharelyApi.getUser(user.username);
      dispatch(fetchCurrentUserAndToken(token, currentUser));
    }
    catch (errors) {
      console.error("Login failed", errors);
      dispatch(showErr(errors));
    }
  }
)


/* user likes a post, update the state store */
export const likePost = (username, postId) => (
  async (dispatch) => {
    try {
      await SharelyApi.likePost(username, postId);
      dispatch(like(postId));
    }
    catch (errors) {
      console.error("Liking post failed", errors);
      dispatch(showErr(errors));
    }
  }
)

export const like = (postId) => (
  {
    type: LIKE,
    postId
  }
);


/* user un-likes a post, update the state store */
export const unLikePost = (username, postId) => (
  async (dispatch) => {
    try {
      await SharelyApi.unLikePost(username, postId);
      dispatch(unlike(postId));
    }
    catch (errors) {
      console.error("Unliking post failed", errors);
      dispatch(showErr(errors));
    }
  }
)

export const unlike = (postId) => (
  {
    type: UNLIKE,
    postId
  }
);


/* user invites a post, update the state store */
export const sendInvite = (username, postId, postOwner) => (
  async (dispatch) => {
    try {
      await SharelyApi.invitePost(username, postId);
      dispatch(invite(postId, postOwner));
    }
    catch (errors) {
      console.error("Inviting failed", errors);
      dispatch(showErr(errors));
    }
  }
)

export const invite = (postId, postOwner) => (
  {
    type: INVITE,
    postId,
    postOwner
  }
);


/* user removes invite from a post, update the state store */
export const removeInvite = (username, postId) => (
  async (dispatch) => {
    try {
      await SharelyApi.unInvitePost(username, postId);
      dispatch(deleteInvite(postId));
    }
    catch (errors) {
      console.error("Removing invite failed", errors);
      dispatch(showErr(errors));
    }
  }
)

export const deleteInvite = (postId) => (
  {
    type: REMOVE_INVITE,
    postId
  }
);
