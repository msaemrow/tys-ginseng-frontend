import React from "react";
import "../css/LoadingOverlay.css";

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <h1>Redirecting to a secure Square checkout page...</h1>
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingOverlay;
