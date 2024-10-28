import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import AdminApi from "../apiGinsengAPI/admin.js";
import { useNavigate } from "react-router";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [adminUser, setAdminUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function getAdminUser() {
      if (token) {
        try {
          const decodedUser = jwtDecode(token);
          setAdminUser(decodedUser); // Decoding and storing the user info
          console.log("Admin User", decodedUser);
          console.log("Token", token);
        } catch (err) {
          console.error("Error getting admin user", err);
          setAdminUser(null);
        }
      } else {
        setAdminUser(null); // If no token, reset admin user
      }
      setLoading(false); // Set loading to false once the operation is done
    }
    getAdminUser();
  }, [token]);

  const login = async (loginData) => {
    try {
      const tokenRes = await AdminApi.loginAdmin(loginData);
      if (tokenRes.token) {
        setToken(tokenRes.token); // Set the token
        return {
          success: true,
          message: "Login successful",
        };
      } else {
        return tokenRes; // Return the error response from the API
      }
    } catch (err) {
      console.error("Login error:", err);
      return {
        success: false,
        message: err.response?.data?.error || "Error logging in",
      };
    }
  };

  const logout = () => {
    setToken(null); // Clear the token and user data
    setAdminUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ adminUser, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};
