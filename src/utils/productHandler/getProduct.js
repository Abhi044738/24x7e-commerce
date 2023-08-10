import axios from "axios";

export const getProduct = (setProduct) => {
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/products");
      setProduct(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
};
