export const filterReducer = (state, action) => {
  switch (action.type) {
    case "Reset":
      console.log("here filter", action.payload);
      return { ...state, categorySelected: "All", priceSelected: 9999999 };
    case "ByCategories":
      const newCategory = action.payload;
      return { ...state, categorySelected: newCategory };
    case "ByPrice":
      const newProduct = action.payload;
      return { ...state, priceSelected: newProduct };
    default:
      return state;
  }
};
