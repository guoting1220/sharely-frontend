import React from 'react';

const NotFound = ({ msg }) => {
  return (
    <div className="NotFound">
      <div className="alert alert-secondary w-75 mx-auto mt-5 p-5" role="alert">{msg}</div>      
    </div>
  )
}

export default NotFound;