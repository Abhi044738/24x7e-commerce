import { useNavigate } from "react-router-dom";
import { useProduct } from "../../../context/productContext";
import { displayMoveButton } from "../../../function/function";
import {
  addToCartHandler,
  addToWishlistHandler,
} from "../../../utils/productHandler/index";
import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/wishListContext";
import { useAuthContext } from "../../../context/AuthContext";

export const ProductCard = () => {
  const { product } = useProduct();
  const navigate = useNavigate();
  const { Cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  const { token } = useAuthContext();

  return (product ?? []).map(({ title, author, price, _id, display, image }) =>
    display === true ? (
      <div className="product-item">
        <img src={image} alt={image} className="product-image" />
        <h3>{title}</h3>
        <p>{author}</p>
        <p>Rs. {price}</p>
        {displayMoveButton(_id, Cart) ? (
          <button onClick={() => navigate("/cart")}>To cart</button>
        ) : (
          <>
            <button
              onClick={() =>
                addToCartHandler(_id, token, Cart, setCart, product)
              }
            >
              Add to cart
            </button>
          </>
        )}
        {displayMoveButton(_id, wishlist) ? (
          <button onClick={() => navigate("/wishlist")}>To WishList</button>
        ) : (
          <button
            onClick={() =>
              addToWishlistHandler(_id, token, wishlist, setWishlist, product)
            }
          >
            Add to Wishlist
          </button>
        )}
      </div>
    ) : (
      <></>
    )
  );
};
