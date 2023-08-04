import axios from "axios";
import { toRemove } from "../../function/function";

export const handleDecrease = async (
  _id,
  token,
  Cart,
  setCart,
  cartDispatch
) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${_id}`,
      { action: { type: "decrement" } },
      { headers: { authorization: token } }
    );
    console.log(response);
    cartDispatch({ type: "updateCart", payload: response.data.cart });
    // toRemove(_id, Cart, setCart);
  } catch (error) {
    console.log(error);
  }
};
