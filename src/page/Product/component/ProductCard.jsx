import { useNavigate } from "react-router-dom";
import { useProduct } from "../../../context/productContext";
import { displayMoveButton } from "./function/displayMoveButton";
import { addToCartHandler } from "../../../utils/cartHandler/index";
import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/wishListContext";
import { useAuthContext } from "../../../context/AuthContext";
import { addToWishlistHandler } from "../../../utils/WishlistHandler/index";
import { useFilter } from "../../../context/FlterContext";

export const ProductCard = () => {
  const { product } = useProduct();
  const navigate = useNavigate();
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { token } = useAuthContext();
  const { filterState } = useFilter();
  const Cart = cartState.cart;
  const wishlist = wishlistState.wishlist;

  console.log(filterState.categorySelected, filterState.priceSelected);
  const products = () =>
    product.filter(
      (item) =>
        (filterState.categorySelected === "All" ||
          filterState.categorySelected === item.categoryName) &&
        filterState.priceSelected >= item.price &&
        (filterState.selectedName === "" ||
          item.title.toLowerCase() === filterState.selectedName.toLowerCase())
    );
  console.log("herer ", products());
  return (products() ?? []).map(
    ({ title, author, price, _id, display, image }) =>
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
                  addToCartHandler(_id, token, product, cartDispatch)
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
                addToWishlistHandler(_id, token, product, wishlistDispatch)
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
