import axios from "axios";
import { useCart } from "../../../context/CartContext";

import { toAdd, toRemove } from "../../../function/function";
import { useAuthContext } from "../../../context/AuthContext";
export const ProvideCard = () => {
  const { token } = useAuthContext();
  const { Cart, setCart } = useCart();
  const handleIncrese = async (_id) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${_id}`,
        { action: { type: "increment" } },
        { headers: { authorization: token } }
      );
      console.log(response);
      toAdd(_id, Cart, setCart);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDecrease = async (_id) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${_id}`,
        { action: { type: "decrement" } },
        { headers: { authorization: token } }
      );
      console.log(response);
      toRemove(_id, Cart, setCart);
    } catch (error) {
      console.log(error);
    }
  };
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
          {/* <ProvideImage title={title} userheight={"fit-content"} /> */}
        </div>
        <div>
          <h3>{title}</h3>
          <p>by {author}</p>
          <p>
            Rs {price} categoryName {categoryName}
          </p>
          <br />
          <p>
            <button onClick={() => handleDecrease(_id)}>-</button>
            count:{count}
            <button onClick={() => handleIncrese(_id)}>+</button>
          </p>
        </div>
      </div>
    )
  );
};
