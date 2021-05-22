import { SHOW_ERR, CLEANUP_ERR } from './actionTypes';


/* normal action creators  */
export const showErr = (errMsgs) => (
  {
    type: SHOW_ERR,
    errMsgs
  }
)


export const cleanUpErr = () => (
  {
    type: CLEANUP_ERR,
  }
)

