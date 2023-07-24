import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/products");
        setProduct(response.data.products);
        const response2 = await axios.get("/api/categories");
        setCategoriesData(response2.data.categories);
      } catch (error) {}
    };
    fetchData();
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
