import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

export default function ProtectedRoute({ children }) {
  const token = useSelector((state) => state.login.token);

  if (!token) {
    return <Navigate to="/Login" />;
  }
  return children ;
}
