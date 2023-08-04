export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "updateWishlist":
      console.log("here", action.payload);
      return { ...state, wishlist: action.payload };
    default:
      return state;
  }
};
