import * as actions from '../../actions/errorsActions'
import * as types from '../../actions/actionTypes'

/* *******************Test Action Creators */
describe('actions', () => {
  it('should create an action to showErr', () => {
    const errMsgs = ["error"];
    const expectedAction = {
      type: types.SHOW_ERR,
      errMsgs
    }
    expect(actions.showErr(errMsgs)).toEqual(expectedAction)
  });

  it('should create an action to cleanUpErr', () => {
    const expectedAction = {
      type: types.CLEANUP_ERR,
    }
    expect(actions.cleanUpErr()).toEqual(expectedAction)
  });
})



