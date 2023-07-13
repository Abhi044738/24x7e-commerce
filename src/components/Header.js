import { NavLink } from "react-router-dom";
import "./style.css";

export const Navigation = () => {
  return (
    <div className="nav-container">
      <h1>24x7Shop!!!</h1>
      <nav>
        <NavLink className="NavLink" to="/">
          Home
        </NavLink>
        <NavLink className="NavLink" to="/products">
          Products
        </NavLink>
        <NavLink className="NavLink" to="/cart">
          Cart item
        </NavLink>
        <NavLink className="NavLink" to="/wishlist">
          Wishlist item
        </NavLink>
      </nav>
    </div>
  );
};
