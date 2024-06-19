import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isConnected = true;
  return isConnected ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
