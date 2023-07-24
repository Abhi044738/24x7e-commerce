import "../style.css";
import { useAuthContext } from "../../../context/AuthContext";
import { ProvideImage } from "../../../function/function";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const buttonContainer = {
  minWidth: "30%",
  padding: "3%",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "4%",
};

const LogSignPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLogin, token, setToken } = useAuthContext();
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
    <div style={buttonContainer}>
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
        <h3>Login </h3>
      </button>
    </div>
  );
};

export const LogInPage = () => {
  return (
    <div
      style={{
        padding: "5%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{ display: "flex", boxShadow: "0 5px 25px 0 rgba(0,0,0,.25)" }}
      >
        <ProvideImage title={"imageSignUpPage"} userheight={"500px"} />
        <LogSignPage />
      </div>
    </div>
  );
};
