import { useCart } from "../../../context/CartContext";

import { useAuthContext } from "../../../context/AuthContext";
import {
  handleDecrease,
  handleIncrese,
  handleRemove,
} from "../../../utils/cartHandler/index";
export const ProvideCard = () => {
  const { token } = useAuthContext();
  const { cartState, setCart, cartDispatch } = useCart();
  const Cart = cartState.cart;

  return Cart.map(
    ({ _id, author, title, price, categoryName, count, image }) => (
      <div className="cart ">
        <div>
          <img
            src={image}
            alt={image}
            style={{ height: "fitContent" }}
            className="cart-product-image"
          />
        </div>
        <div>
          <h3>{title}</h3>
          <p>by {author}</p>
          <p>
            Rs {price} categoryName {categoryName}
          </p>
          <br />
          <p>
            {count !== 1 ? (
              <button
                onClick={() =>
                  handleDecrease(_id, token, Cart, setCart, cartDispatch)
                }
              >
                -
              </button>
            ) : (
              <button
                onClick={() =>
                  handleRemove(_id, token, Cart, setCart, cartDispatch)
                }
              >
                X
              </button>
            )}
            count:{count}
            <button
              onClick={() =>
                handleIncrese(_id, token, Cart, setCart, cartDispatch)
              }
            >
              +
            </button>
          </p>
        </div>
      </div>
    )
  );
};
