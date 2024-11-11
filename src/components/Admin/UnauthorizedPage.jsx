import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Admin/UnauthorizedPage.css";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="div-top" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>403 - Unauthorized</h1>
      <p>You must be a site admin to view this page.</p>
      <button onClick={handleGoBack}>Return Home</button>
    </div>
  );
};

export default UnauthorizedPage;
