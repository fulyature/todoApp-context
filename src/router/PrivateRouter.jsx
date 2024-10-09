import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const email = "fulyature@gmail.com";
const password = "1234";

const PrivateRouter = () => {
  return email === "fulyature@gmail.com" && password === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
