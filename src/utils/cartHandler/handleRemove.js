import axios from "axios";
import { toRemove } from "../../function/function";

export const handleRemove = async (_id, token, Cart, setCart) => {
  try {
    const response = await axios.delete(`/api/user/cart/${_id}`, {
      headers: { authorization: token },
    });
    console.log(response);
    toRemove(_id, Cart, setCart);
  } catch (error) {
    console.log(error);
  }
};
