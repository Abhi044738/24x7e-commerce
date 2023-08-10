import axios from "axios";
export const addToCartHandler = async (_id, token, product, cartDispatch) => {
  const item = product.find((item) => item._id === _id);
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product: item },
      { headers: { authorization: token } }
    );
    console.log(response);
    cartDispatch({ type: "updateCart", payload: response.data.cart });
  } catch (error) {
    console.log(error);
  }
};
