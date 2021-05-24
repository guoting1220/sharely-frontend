import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanUpErr } from '../actions/errorsActions';


/* whenever catch an error, show the alert message */const Alert = () => {
  const errors = useSelector(store => store.errors);

  const dispatch = useDispatch();

  const clearError = () => {
    dispatch(cleanUpErr());
  }

  if (errors.length === 0) return null;

  return (
    <div className={`container w-50 my-2 alert alert-danger`} role="alert">
      {errors.map((m, idx) =>
        <p key={idx}>{m}</p>)}

      <i className="btn fas fa-times text-end" onClick={clearError}></i>
    </div>
  )
}

export default Alert;