import "../style.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../context/AuthContext";
import axios from "axios";

export const DisplayLoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLogin, setToken } = useAuthContext();
  const loginHandler = async () => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });

      setToken(response.data.encodedToken);
      localStorage.setItem("Token", response.data.encodedToken);
      console.log(localStorage.getItem("Token"));
      setLogin(true);
      navigate(location?.state?.from?.pathname || "/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="button-container">
      <h1>Bookworm's Paradise!!!</h1>
      <p>Welcome to Bookworm's Paradise!!!</p>
      <label>
        Enter Email
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Enter password
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={loginHandler}>
        <h3>Login</h3>
      </button>
      <button onClick={() => navigate("/signUpPage")}>
        <h3>Signup</h3>
      </button>
    </div>
  );
};
