import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanUpErr } from '../actions/errorsActions';


/* shenever catch an error, show the alert message */
const Alert = () => {
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


    // <div class="modal" tabindex="-1">
    //   <div class="modal-dialog">
    //     <div class="modal-content">
    //       <div class="modal-header">
    //         <h5 class="modal-title">Modal title</h5>
    //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    //           <span aria-hidden="true">&times;</span>
    //         </button>
    //       </div>
    //       <div class="modal-body">
    //         <p>Modal body text goes here.</p>
    //       </div>
    //       <div class="modal-footer">
    //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    //         <button type="button" class="btn btn-primary">Save changes</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>





  )
}

export default Alert;