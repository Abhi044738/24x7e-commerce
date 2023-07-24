import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

export const RequiresAuth = ({ children }) => {
  const { token } = useAuthContext();
  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate to="/LogInSignUnPage" state={{ from: location.pathname }} />
  );
};
