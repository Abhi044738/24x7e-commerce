import "./style.css";
import { DisplayLoginPage } from "./component/DisplayLoginPage";
import { loginSignUp } from "../../../assets/image/index";

export const LogInPage = () => {
  return (
    <div className="login-page">
      <div
        className="login-container"
        style={{ display: "flex", boxShadow: "0 5px 25px 0 rgba(0,0,0,.25)" }}
      >
        <img src={loginSignUp} alt="image" />

        <DisplayLoginPage />
      </div>
    </div>
  );
};
