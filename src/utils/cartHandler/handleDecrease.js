import axios from "axios";
export const handleDecrease = async (_id, token, cartDispatch) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${_id}`,
      { action: { type: "decrement" } },
      { headers: { authorization: token } }
    );
    console.log(response);
    cartDispatch({ type: "updateCart", payload: response.data.cart });
  } catch (error) {
    console.log(error);
  }
};
