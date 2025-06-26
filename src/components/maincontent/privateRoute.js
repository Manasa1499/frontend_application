import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
