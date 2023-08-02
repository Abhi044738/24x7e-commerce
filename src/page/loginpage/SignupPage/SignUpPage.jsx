import "./style.css";
import { ProvideImage } from "../../../function/function";
import { DisplaySignupPage } from "./component/DisplaySignupPage";

export const SignUpPage = () => {
  return (
    <div className="signin-page">
      <div className="sign-container">
        <img src="/" alt="image" />
        {/* <ProvideImage title={"imageSignUpPage"} userheight={"500px"} /> */}
        <DisplaySignupPage />
      </div>
    </div>
  );
};
