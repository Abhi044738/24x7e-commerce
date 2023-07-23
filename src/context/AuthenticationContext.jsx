import { createContext, useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AuthenticationContext = createContext(null);

const AuthenticationProvider = ({ children }) => {
  const [token, setToken] = useState("");

  return (
    <AuthenticationContext.Provider value={{ token, setToken }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

const useAuthenticationContext = () => useContext(AuthenticationContext);

export { useAuthenticationContext, AuthenticationProvider };
