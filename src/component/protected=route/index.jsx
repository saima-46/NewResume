import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) return <Navigate to="/" />; // not logged in

  if (adminOnly && user.role !== "admin") return <Navigate to="/dashboard" />;

  return children;
};

export default ProtectedRoute;
