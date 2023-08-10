import axios from "axios";
export const addToWishlistHandler = async (
  _id,
  token,
  product,
  wishlistDispatch
) => {
  const item = product.find((item) => item._id === _id);
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      {
        product: item,
      },
      { headers: { authorization: token } }
    );
    console.log(response);
    wishlistDispatch({
      type: "updateWishlist",
      payload: response.data.wishlist,
    });
  } catch (error) {
    console.log(error);
  }
};
