import axios from "axios";
import { toRemove } from "../../function/function";

export const handleRemove = async (_id, token, Cart, setCart, cartDispatch) => {
  try {
    const response = await axios.delete(`/api/user/cart/${_id}`, {
      headers: { authorization: token },
    });
    console.log(response);
    cartDispatch({ type: "updateCart", payload: response.data.cart });

    // toRemove(_id, Cart, setCart);
  } catch (error) {
    console.log(error);
  }
};
