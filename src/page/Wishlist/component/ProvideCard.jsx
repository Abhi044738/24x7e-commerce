import { useCart } from "../../../context/CartContext";
import { useProduct } from "../../../context/productContext";
import { useWishlist } from "../../../context/wishListContext";
import { Add, ProvideImage, toRemove } from "../../../function/function";

export const ProvideCard = () => {
  const { product } = useProduct();
  const { Cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  return wishlist.map(({ title, author, price, _id }) => (
    <div className="cart">
      <div>
        <ProvideImage title={title} userheight={"fit-content"} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>by {author}</p>
        <p>{price}</p>
        {!Cart.find((item) => item._id === _id) ? (
          <button onClick={() => Add(_id, Cart, setCart, product)}>
            Add to cart
          </button>
        ) : (
          <></>
        )}
        <button onClick={() => toRemove(_id, wishlist, setWishlist)}>
          Remove From Wishlist
        </button>
      </div>
    </div>
  ));
};
