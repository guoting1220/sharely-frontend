import * as actions from '../../actions/postsActions'
import * as types from '../../actions/actionTypes'

/* *******************Test Action Creators */
describe('actions', () => {
  it('should create an action to fetchPost', () => {
    const post = { 1: { id: 1, itemName: "item1" } };
    const expectedAction = {
      type: types.FETCH_POST,
      post
    }
    expect(actions.fetchPost(post)).toEqual(expectedAction)
  });


  it('should create an action to addNewPost', () => {
    const postData = { 1: { id: 1, itemName: "item1" } };
    const expectedAction = {
      type: types.ADD_POST,
      postData
    }
    expect(actions.addNewPost(postData)).toEqual(expectedAction)
  });

  it('should create an action to updatePost', () => {
    const postId = 1;
    const postData = { 1: { id: 1, itemName: "item1" } };
    const expectedAction = {
      type: types.UPDATE_POST,
      postId,
      postData
    }
    expect(actions.updatePost(postId, postData)).toEqual(expectedAction)
  });

  it('should create an action to removePost', () => {
    const postId = 1;
    const expectedAction = {
      type: types.DELETE_POST,
      postId
    }
    expect(actions.removePost(postId)).toEqual(expectedAction)
  });

  it('should create an action to addComment', () => {
    const postId = 1;
    const commentData = {text:"text"};
    const expectedAction = {
      type: types.ADD_COMMENT,
      postId, 
      commentData
    }
    expect(actions.addComment(postId, commentData)).toEqual(expectedAction)
  });

  it('should create an action to deleteComment', () => {
    const postId = 1;
    const commentId = 1;
    const expectedAction = {
      type: types.DELETE_COMMENT,
      postId, 
      commentId
    }
    expect(actions.deleteComment(postId, commentId)).toEqual(expectedAction)
  });

});

