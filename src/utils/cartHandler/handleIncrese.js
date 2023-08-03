import axios from "axios";
import { toAdd } from "../../function/function";

export const handleIncrese = async (_id, token, Cart, setCart) => {
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
