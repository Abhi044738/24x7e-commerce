import "./style.css";
import { ProvideImage } from "../../../function/function";
import { DisplayLoginPage } from "./component/DisplayLoginPage";

export const LogInPage = () => {
  return (
    <div className="login-page">
      <div
        className="login-container"
        style={{ display: "flex", boxShadow: "0 5px 25px 0 rgba(0,0,0,.25)" }}
      >
        <img src="/" alt="image" />

        {/* <ProvideImage title={"imageSignUpPage"} userheight={"500px"} /> */}
        <DisplayLoginPage />
      </div>
    </div>
  );
};
