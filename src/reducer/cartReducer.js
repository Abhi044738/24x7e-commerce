export const cartReducer = (state, action) => {
  switch (action.type) {
    case "updateCart":
      console.log("here", action.payload);
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
