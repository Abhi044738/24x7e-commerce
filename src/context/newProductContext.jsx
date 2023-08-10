import axios from "axios";
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
  });
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get("/api/products");
  //         setProduct(response.data.products);
  //         const response2 = await axios.get("/api/categories");
  //         setCategoriesData(response2.data.categories);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchData();
  //   }, []);

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
