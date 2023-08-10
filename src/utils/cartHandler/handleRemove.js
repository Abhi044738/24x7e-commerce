import axios from "axios";
export const handleRemove = async (_id, token, cartDispatch) => {
  try {
    const response = await axios.delete(`/api/user/cart/${_id}`, {
      headers: { authorization: token },
    });
    console.log(response);
    cartDispatch({ type: "updateCart", payload: response.data.cart });
  } catch (error) {
    console.log(error);
  }
};
