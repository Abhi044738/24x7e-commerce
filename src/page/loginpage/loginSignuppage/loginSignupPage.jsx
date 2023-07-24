import { useNavigate } from "react-router-dom";

import { ProvideImage } from "../../../function/function";
const buttonContainer = {
  minWidth: "30%",
  padding: "10%",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "5%",
};

const LogSignPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/login");
  const handleSignUP = () => navigate("/SignupPage");
  return (
    <div style={buttonContainer}>
      <h1>Bookworm's Paradise!!!</h1>
      <p>Welcome to Bookworm's Paradise!!!</p>
      <button onClick={handleLogin}>
        <h3>Login</h3>
      </button>
      <button onClick={handleSignUP}>
        <h3>SignUp</h3>
      </button>
    </div>
  );
};

export const LoginSignUpPage = () => {
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
