import axios from "axios";
import { toRemove } from "../../function/function";

export const handleDelete = async (
  _id,
  token,
  wishlist,
  setWishlist,
  wishlistDispatch
) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${_id}`, {
      headers: { authorization: token },
    });
    console.log(response);
    wishlistDispatch({
      type: "updateWishlist",
      payload: response.data.wishlist,
    });
    // toRemove(_id, wishlist, setWishlist);
  } catch (error) {
    console.log(error);
  }
};
