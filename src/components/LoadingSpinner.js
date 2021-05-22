import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="LoadingSpinner d-flex align-items-center justify-content-center vh-100 text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default LoadingSpinner;