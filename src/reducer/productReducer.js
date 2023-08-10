import {
  filterPrice,
  filtercategories,
} from "../components/FilterBar/component/function";
import { useProduct } from "../context/productContext";
import { getProduct } from "../utils/productHandler/getProduct";

export const productReducer = (state, action) => {
  const Product = getProduct();
  switch (action.type) {
    case "Reset":
      console.log("here filter", action.payload);
      return { ...state, Product };
    case "ByCategories":
      const categories = action.payload.categories;
      const newCategory = filtercategories(categories, Product);
      return { ...state, newCategory };
    case "ByPrice":
      const price = action.payload.categories;
      const newProduct = filterPrice(price, Product);
      return { ...state, newProduct };
    default:
      return state;
  }
};
