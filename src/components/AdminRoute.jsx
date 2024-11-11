import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/UserProvider"; // Adjust the import based on your UserProvider location

const AdminRoute = ({ children }) => {
  const { adminUser, loading } = useContext(UserContext); // Assuming you have currentUser from UserProvider
  //Display loading message while login process is being completed
  if (loading) {
    return <div>Loading...</div>;
  }
  // Redirect to unauthorized page if no admin user is found
  if (!adminUser) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};

export default AdminRoute;
