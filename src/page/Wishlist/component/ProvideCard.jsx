import { useCart } from "../../../context/CartContext";
import { useProduct } from "../../../context/productContext";
import { useWishlist } from "../../../context/wishListContext";
import { useAuthContext } from "../../../context/AuthContext";
import { handleDelete } from "../../../utils/WishlistHandler/index";
import { addToCartHandler } from "../../../utils/cartHandler/index";
export const ProvideCard = () => {
  const { product } = useProduct();
  const { cartState, cartDispatch } = useCart();
  const { token } = useAuthContext();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const wishlist = wishlistState.wishlist;
  const Cart = cartState.cart;
  return wishlist.map(({ title, author, price, _id, image }) => (
    <div className="cart">
      <div>
        <img style={{ height: "fillContent" }} src={image} alt={image} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>by {author}</p>
        <p>{price}</p>
        {!Cart.find((item) => item._id === _id) ? (
          <button
            onClick={() => addToCartHandler(_id, token, product, cartDispatch)}
          >
            Add to cart
          </button>
        ) : (
          <></>
        )}
        <button onClick={() => handleDelete(_id, token, wishlistDispatch)}>
          Remove From Wishlist
        </button>
      </div>
    </div>
  ));
};
