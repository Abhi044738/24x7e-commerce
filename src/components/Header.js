import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { useCartWishlistContext } from "../context/context";
import { SearchBar } from "./searchBar";
import { useAuthenticationContext } from "../context/AuthenticationContext";
import { LogInSignUnPage } from "../page/loginpage/logInSignUnPage";

export const Navigation = () => {
  const { Cart, WishList } = useCartWishlistContext();
  // console.log("asf", Cart.length, Wishlist.length);
  const { Login, setLogin } = useAuthenticationContext();
  const navigate = useNavigate();
  const Location = useLocation();
  // const handleSingup = () => {
  //   setLogin(!Login);
  //   if (Login === true) {
  //   }
  //   console.log(Location?.state?.from);
  //   navigate(Location?.state?.from);
  // };
  const handleSingup = () => {
    if (Login) {
      setLogin(!Login);
    } else {
      window.location.href = "/LogInSignUnPage";
    }
  };

  return (
    <div className="nav-container">
      <h1>Bookworm's Paradise!!!</h1>
      <SearchBar />
      <nav>
        <NavLink className="NavLink" to="/">
          Home
        </NavLink>
        <NavLink className="NavLink" to="/products">
          Products
        </NavLink>
        <NavLink className="NavLink" to="/cart">
          Cart item {Cart.length}
        </NavLink>
        <NavLink className="NavLink" to="/wishlist">
          Wishlist item {WishList.length}
        </NavLink>
        <button onClick={handleSingup}>{Login ? "logout" : "login"}</button>
      </nav>
    </div>
  );
};
