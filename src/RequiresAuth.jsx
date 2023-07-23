import { Navigate, useLocation } from "react-router-dom";
import { useAuthenticationContext } from "./context/AuthenticationContext";

export const RequiresAuth = ({ children }) => {
  const { token } = useAuthenticationContext();
  const location = useLocation();

  return token ? (
    // return Login ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
};
