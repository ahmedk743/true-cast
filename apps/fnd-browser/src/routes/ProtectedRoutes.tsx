import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const ProtectedRoutes = () => {
  const { user } = useAuth();
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
