import axios from "axios";
export const handleIncrese = async (_id, token, cartDispatch) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${_id}`,
      { action: { type: "increment" } },
      { headers: { authorization: token } }
    );
    console.log(response);
    cartDispatch({ type: "updateCart", payload: response.data.cart });
  } catch (error) {
    console.log(error);
  }
};
