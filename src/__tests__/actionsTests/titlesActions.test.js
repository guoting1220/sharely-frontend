import * as actions from '../../actions/titlesActions'
import * as types from '../../actions/actionTypes'

/* *******************Test Action Creators */
describe('actions', () => {
  it('should create an action to getTitltes', () => {
    const titles = [{id:1},{id:2}];
    const expectedAction = {
      type: types.FETCH_TITLES,
      titles
    }
    expect(actions.getTitltes(titles)).toEqual(expectedAction)
  });
})

  

