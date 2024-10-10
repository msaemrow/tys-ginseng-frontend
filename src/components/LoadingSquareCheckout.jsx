import React from "react";

const LoadingSquareCheckout = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h1 className="mt-3">
        You are now being redirected to a secure Square checkout page
      </h1>
    </div>
  );
};

export default LoadingSquareCheckout;
