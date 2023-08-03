import axios from "axios";
import { toRemove } from "../../function/function";

export const handleDecrease = async (_id, token, Cart, setCart) => {
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
