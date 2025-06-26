import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { Nav } from "react-bootstrap";
const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
