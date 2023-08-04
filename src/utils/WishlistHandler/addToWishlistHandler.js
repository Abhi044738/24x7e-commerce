import axios from "axios";
import { Add } from "../../function/function";

export const addToWishlistHandler = async (
  _id,
  token,
  wishlist,
  setWishlist,
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
    // Add(_id, wishlist, setWishlist, product);
  } catch (error) {
    console.log(error);
  }
};
