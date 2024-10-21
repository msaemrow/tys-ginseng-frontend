import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../UserProvider";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login } = useContext(UserContext); // Destructure the login function

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the login function from UserContext
    const result = await login({ username, password });
    setPassword("");
    // Handle the result of the login attempt
    if (result.success) {
      console.log("Login successful", result);
      setUsername("");
      navigate("/admin/homepage");
      // Optionally redirect or update the UI to reflect the login
    } else {
      console.error("Login failed:", result.message);
      // Optionally show an error message to the user
    }
  };

  return (
    <div className="admin-login container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label
                htmlFor="username"
                className="col-sm-4 col-form-label pe-0"
              >
                Username:
              </label>
              <div className="ps-0 col-sm-8">
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="password"
                className="col-sm-4 col-form-label pe-0"
              >
                Password:
              </label>
              <div className="col-sm-8 ps-0">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
