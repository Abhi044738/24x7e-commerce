import { createContext, useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AuthenticationContext = createContext(null);

const AuthenticationProvider = ({ children }) => {
  const [Login, setLogin] = useState(false);
  const [location, setLocation] = useState(null);
  const RequiredAuth = ({ children }) => {
    const Location = useLocation();
    setLocation(Location.pathname);
    console.log(location);
    return Login ? (
      children
    ) : (
      <Navigate to="/login" state={{ from: Location.pathname }} />
    );
  };
  return (
    <AuthenticationContext.Provider value={{ Login, setLogin, RequiredAuth }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

const useAuthenticationContext = () => useContext(AuthenticationContext);

export { useAuthenticationContext, AuthenticationProvider };
