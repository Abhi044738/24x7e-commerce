import "./style.css";
import { DisplaySignupPage } from "./component/DisplaySignupPage";
import { loginSignUp } from "../../../assets/image/index";

export const SignUpPage = () => {
  return (
    <div className="signin-page">
      <div className="sign-container">
        <img src={loginSignUp} alt="image" />
        <DisplaySignupPage />
      </div>
    </div>
  );
};
