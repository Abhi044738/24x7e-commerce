import { useCartWishlistContext } from "../../context/context";
import { useProduct } from "../../context/productContext";
import { Add, ProvideImage, toRemove } from "../../function/function";
import "../Home.css";

export const Wishlist = () => {
  const { product } = useProduct();
  const { WishList, Cart, setCart, setWishList } = useCartWishlistContext();

  return (
    <div className="wishlist">
      {WishList.map(({ title, author, price, _id }) => (
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
            <button onClick={() => toRemove(_id, WishList, setWishList)}>
              Remove From Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
