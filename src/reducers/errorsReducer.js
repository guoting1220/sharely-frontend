import { SHOW_ERR, CLEANUP_ERR } from '../actions/actionTypes';

export default function errorsReducer (state = [], action) {
  switch (action.type) {
    case SHOW_ERR: {
      return [...action.errMsgs];
    }

    case CLEANUP_ERR: {
      return [];
    }

    default:
      return state;
  }
}




