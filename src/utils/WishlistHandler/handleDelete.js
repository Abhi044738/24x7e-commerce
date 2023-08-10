import axios from "axios";
export const handleDelete = async (_id, token, wishlistDispatch) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${_id}`, {
      headers: { authorization: token },
    });
    console.log(response);
    wishlistDispatch({
      type: "updateWishlist",
      payload: response.data.wishlist,
    });
  } catch (error) {
    console.log(error);
  }
};
