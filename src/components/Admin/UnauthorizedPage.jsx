import React from "react";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>403 - Unauthorized</h1>
      <p>You must be a site admin to view this page.</p>
      <button onClick={handleGoBack}>Return Home</button>
    </div>
  );
};

export default UnauthorizedPage;
