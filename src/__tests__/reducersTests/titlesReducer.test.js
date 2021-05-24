import * as types from '../../actions/actionTypes'
import reducer from '../../reducers/titlesReducer'

describe('titles reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle FETCH_TITLES', () => {
    expect(
      reducer([], {
        type: types.FETCH_TITLES,
        titles: [{ id: 1 }, { id: 2 }],
      })
    ).toEqual([{ id: 1 }, { id: 2 }])
  })

  it('should handle ADD_POST', () => {
    expect(
      reducer([], {
        type: types.ADD_POST,
        postData: { id: 1,itemName: "item", description:"des"},
      })
    ).toEqual([{ id: 1, itemName: "item"}])
  })

  it('should handle UPDATE_POST', () => {
    expect(
      reducer([{ id: 1, itemName: "item" }], {
        type: types.UPDATE_POST,
        postId:1,
        postData: { id: 1, itemName: "newItem"},
      })
    ).toEqual([{ id: 1, itemName: "newItem" }])
  })

  it('should handle DELETE_POST', () => {
    expect(
      reducer([{ id: 1 }, { id: 2 }], {
        type: types.DELETE_POST,
        postId:1
      })
    ).toEqual([{ id: 2 }])
  })
  
})