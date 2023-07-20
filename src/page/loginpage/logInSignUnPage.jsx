import { useLocation, useNavigate } from "react-router-dom";
import { useAuthenticationContext } from "../../context/AuthenticationContext";

export const LogInSignUnPage = () => {
  const { Login, setLogin } = useAuthenticationContext();
  //   const navigate = useNavigate();
  //   const Location = useLocation();

  const handleClick = () => {
    setLogin(!Login);
    // console.log("5", location);
    // navigate(location);
  };
  return (
    <div>
      <button onClick={handleClick}>Login with google</button>
      <button onClick={handleClick}>SignUp with google</button>
    </div>
  );
};
