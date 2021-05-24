import * as types from '../../actions/actionTypes'
import reducer from '../../reducers/errorsReducer'

describe('errors reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle SHOW_ERR', () => {
    expect(
      reducer([], {
        type: types.SHOW_ERR,
        errMsgs: ["something wrong"],
      })
    ).toEqual(["something wrong"])
  })

  it('should handle CLEANUP_ERR', () => {
    expect(
      reducer(["something wrong"], {
        type: types.CLEANUP_ERR,
      })
    ).toEqual([])
  })

})