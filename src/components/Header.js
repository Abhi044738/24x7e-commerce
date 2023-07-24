import { NavLink } from "react-router-dom";
import "./style.css";
import { useCartWishlistContext } from "../context/CartWishlistContext";
import { SearchBar } from "./SearchBar";
import { useAuthContext } from "../context/AuthContext";

export const Navigation = () => {
  const { Cart, WishList } = useCartWishlistContext();
  const { Login, setLogin } = useAuthContext();
  const handleSingup = () => {
    console.log("caacacca", Login);
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
        {/* <button onClick={handleSingup}>login/out</button> */}
      </nav>
    </div>
  );
};
