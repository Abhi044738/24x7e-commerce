import axios from "axios";
import { toAdd } from "../../function/function";

export const handleIncrese = async (
  _id,
  token,
  Cart,
  setCart,
  cartDispatch
) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${_id}`,
      { action: { type: "increment" } },
      { headers: { authorization: token } }
    );
    console.log(response);
    cartDispatch({ type: "updateCart", payload: response.data.cart });

    // toAdd(_id, Cart, setCart);
  } catch (error) {
    console.log(error);
  }
};
