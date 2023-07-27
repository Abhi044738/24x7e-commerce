import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";

import { useAuthContext } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { SearchBar } from "../SearchBar/SearchBar";
import { useWishlist } from "../../context/wishListContext";

export const Navigation = () => {
  const navigate = useNavigate();
  const { Cart } = useCart();
  const { Login, setLogin, setToken } = useAuthContext();
  const { wishlist } = useWishlist();
  const handleSingup = () => {
    console.log("caacacca", Login);
    if (Login) {
      setLogin(!Login);
      setToken(false);
    } else {
      navigate("/login");
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
          Wishlist item {wishlist.length}
        </NavLink>
        <button onClick={handleSingup}>{Login ? "logout" : "login"}</button>
        {/* <button onClick={handleSingup}>login/out</button> */}
      </nav>
    </div>
  );
};
