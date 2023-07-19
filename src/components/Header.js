import { NavLink } from "react-router-dom";
import "./style.css";
import { useCartWishlistContext } from "../context/context";
import { SearchBar } from "./searchBar";

export const Navigation = () => {
  const { Cart, WishList } = useCartWishlistContext();
  // console.log("asf", Cart.length, Wishlist.length);

  return (
    <div className="nav-container">
      <h1>24x7Shop!!!</h1>
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
      </nav>
    </div>
  );
};
