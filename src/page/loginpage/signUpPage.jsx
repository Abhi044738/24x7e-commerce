import { useAuthenticationContext } from "../../context/AuthenticationContext";
import { ProvideImage } from "../../function/function";
const buttonContainer = {
  minWidth: "30%",
  padding: "2%",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "3%",
};
const LogSignPage = ({ setState }) => {
  const { Login, setLogin } = useAuthenticationContext();
  const handleClick = () => {
    setLogin(!Login);
  };

  return (
    <div style={buttonContainer}>
      <h1>Bookworm's Paradise!!!</h1>
      <p>Welcome to Bookworm's Paradise!!!</p>
      <label>
        UserName
        <br />
        <input type="words" />
      </label>
      <label>
        Enter Email
        <br />
        <input type="words" />
      </label>
      <label>
        Enter password
        <br />
        <input type="password" />
      </label>
      <button onClick={handleClick}>
        <h3>SignUp </h3>
      </button>
    </div>
  );
};

export const SignUpPage = () => {
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
