import "../style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../context/AuthContext";
import { useState } from "react";
import { useCart } from "../../../../context/CartContext";
import axios from "axios";
import { useWishlist } from "../../../../context/wishListContext";
export const DisplaySignupPage = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist;
  const [userInfo, setUserInfo] = useState({ cart, wishlist });
  const { Login, setLogin, setToken } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    const { firstName, lastName, email, password } = userInfo;

    if (
      firstName !== undefined &&
      lastName !== undefined &&
      email !== undefined &&
      password !== undefined
    ) {
      const signupHandler = async () => {
        try {
          const response = await axios.post("/api/auth/signup", {
            ...userInfo,
          });
          console.log("hello", response);
          console.log("dcsjlkm,cds hcjcd here", response.data.encodedToken);
          localStorage.setItem("Token", response.data.encodedToken);
          setToken(response.data.encodedToken);
          setLogin(true);

          navigate(location?.state?.from?.pathname || "/");
        } catch (error) {
          console.error(error);
          navigate(location?.state?.from?.pathname || "/");
        }
      };
      signupHandler();
    }

    setLogin(!Login);
  };

  return (
    <div className="button-container">
      <h1>Bookworm's Paradise!!!</h1>
      <p>Welcome to Bookworm's Paradise!!!</p>
      <label>
        First Name
        <br />
        <input
          type="words"
          onChange={(event) =>
            setUserInfo({ ...userInfo, firstName: event.target.value })
          }
        />
      </label>
      <label>
        Last Name
        <br />
        <input
          type="words"
          onChange={(event) =>
            setUserInfo({ ...userInfo, lastName: event.target.value })
          }
        />
      </label>
      <label>
        Enter Email
        <br />
        <input
          type="words"
          onChange={(event) =>
            setUserInfo({ ...userInfo, email: event.target.value })
          }
        />
      </label>
      <label>
        Enter password
        <br />
        <input
          type="password"
          onChange={(event) =>
            setUserInfo({ ...userInfo, password: event.target.value })
          }
        />
      </label>
      <button onClick={handleClick}>
        <h3>SignUp </h3>
      </button>
    </div>
  );
};
