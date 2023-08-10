import axios from "axios";
import { Add } from "../../function/function";

export const addToCartHandler = async (
  _id,
  token,
  Cart,
  setCart,
  product,
  cartDispatch
) => {
  const item = product.find((item) => item._id === _id);
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product: item },
      { headers: { authorization: token } }
    );
    console.log(response);
    // Add(_id, Cart, setCart, product);
    cartDispatch({ type: "updateCart", payload: response.data.cart });
  } catch (error) {
    console.log(error);
  }
};