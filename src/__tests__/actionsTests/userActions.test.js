import * as actions from '../../actions/userActions'
import * as types from '../../actions/actionTypes'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import SharelyApi from '../../api/api';

// import expect from 'expect' // You can use any testing library

/* *******************Test Action Creators */
describe('actions', () => {
  it('should create an action to fetchCurrentUserAndToken', () => {
    const token = 'some tokekn';
    const currentUser = {username:"a"};
    const expectedAction = {
      type: types.FETCH_CURRENT_USER_AND_TOKEN,
      token,
      currentUser
    }
    expect(actions.fetchCurrentUserAndToken(token, currentUser)).toEqual(expectedAction)
  });


  it('should create an action to removeCurrentUserAndToken', () => {
    const expectedAction = {
      type: types.REMOVE_CURRENT_USER_AND_TOKEN,
    }
    expect(actions.removeCurrentUserAndToken()).toEqual(expectedAction)
  });

  it('should create an action to like', () => {
    const postId = 1;
    const expectedAction = {
      type: types.LIKE,
      postId
    }
    expect(actions.like(postId)).toEqual(expectedAction)
  });

  it('should create an action to unlike', () => {
    const postId = 1;
    const expectedAction = {
      type: types.UNLIKE,
      postId
    }
    expect(actions.unlike(postId)).toEqual(expectedAction)
  });

  it('should create an action to invite', () => {
    const postId = 1;
    const postOwner = "a";
    const expectedAction = {
      type: types.INVITE,
      postId,
      postOwner
    }
    expect(actions.invite(postId, postOwner)).toEqual(expectedAction)
  });

  it('should create an action to deleteInvite', () => {
    const postId = 1;
    const expectedAction = {
      type: types.REMOVE_INVITE,
      postId,
    }
    expect(actions.deleteInvite(postId)).toEqual(expectedAction)
  });
});


