import React from "react";
import { Navigate, useLocation } from "react-router-dom";

/**
 * ProtectedRoute
 * A wrapper for role-based route protection.
 *
 * @param {string} allowedRole - The role allowed to access the route (e.g., "patient" or "hospital").
 * @param {ReactNode} children - The component to render if access is granted.
 *
 * @returns {ReactNode} - The child component or a redirect to login/home.
 */
const ProtectedRoute = ({ allowedRole, children }) => {
  const location = useLocation();

  // Safely get user data from localStorage
  let user = null;
  try {
    const storedUser = localStorage.getItem("user");
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error parsing user data:", error);
  }

  // Redirect to login if user is not logged in
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Role-based access control
  if (user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  // If checks pass, allow rendering the protected component
  return children;
};

export default ProtectedRoute;
