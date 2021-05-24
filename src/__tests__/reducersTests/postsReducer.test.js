import * as types from '../../actions/actionTypes'
import reducer from '../../reducers/postsReducer'

describe('posts reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle FETCH_POST', () => {
    expect(
      reducer({}, {
        type: types.FETCH_POST,
        post: { id: 1 },
      })
    ).toEqual({ 1: { id: 1 } })
  })

  it('should handle ADD_POST', () => {
    expect(
      reducer({}, {
        type: types.ADD_POST,
        postData: { id: 1, itemName: "item" },
      })
    ).toEqual({ 1: { id: 1, itemName: "item", comments: [] } })
  })

  it('should handle UPDATE_POST', () => {
    expect(
      reducer({ 1: { id: 1, itemName: "item", comments: [] } }, {
        type: types.UPDATE_POST,
        postId: 1,
        postData: { itemName: "newItem" },
      })
    ).toEqual({ 1: { id: 1, itemName: "newItem", comments: [] } })
  })

  it('should handle DELETE_POST', () => {
    expect(
      reducer({ 1: { id: 1, itemName: "item", comments: [] } }, {
        type: types.DELETE_POST,
        postId: 1
      })
    ).toEqual({})
  })

  it('should handle ADD_COMMENT', () => {
    expect(
      reducer({ 1: { id: 1, itemName: "item", comments: [] } }, {
        type: types.ADD_COMMENT,
        postId: 1,
        commentData: { text: "comment text" },
      })
    ).toEqual({
      1: {
        id: 1, itemName: "item", comments: [{
          text: "comment text",
        }]
      }
    })
  })

  it('should handle DELETE_COMMENT', () => {
    expect(
      reducer({ 1: { id: 1, itemName: "item", comments: [{ id: 99 }] } }, {
        type: types.DELETE_COMMENT,
        postId:1,
        commentId: 99,
      })
    ).toEqual({
      1: { id: 1, itemName: "item", comments: [] }
    })
  })

})


