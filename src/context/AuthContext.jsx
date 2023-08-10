import { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [Login, setLogin] = useState(false);
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider value={{ token, setToken, Login, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
