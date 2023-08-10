import { createContext, useContext, useEffect, useState } from "react";
import { getProduct } from "../utils/productHandler/getProduct";
import { getCategories } from "../utils/categariesHandler/getCategories";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    getProduct(setProduct);
    getCategories(setCategoriesData);
  }, []);
  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        categoriesData,
        setCategoriesData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);
export { useProduct, ProductProvider };
