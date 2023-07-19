import { useEffect } from "react";
import { useCartWishlistContext } from "../../context/context";
import { useDataBase } from "../../context/dataBaseContext";
import { Add, toRemove } from "../../function/function";
import "../Home.css";

export const Wishlist = () => {
  const { dataBase } = useDataBase();
  const { WishList, Cart, setCart, setWishList } = useCartWishlistContext();

  return (
    <div className="wishlist">
      {WishList.map(({ title, author, price, _id }) => (
        <div className="cart">
          <div className="member">
            <img src="" alt="" />
          </div>
          <div className="member">
            <h3>{title}</h3>
            <p>by {author}</p>
            <p>{price}</p>
            {!Cart.find((item) => item._id === _id) ? (
              <button onClick={() => Add(_id, Cart, setCart, dataBase)}>
                Add to cart
              </button>
            ) : (
              <></>
            )}
            {/* <button
              onClick={() =>
                wishlistToCart(
                  _id,
                  Cart,
                  WishList,
                  setCart,
                  setWishList,
                  dataBase
                )
              }
            >
              Add to cart
            </button> */}
            <button onClick={() => toRemove(_id, WishList, setWishList)}>
              Remove From Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
