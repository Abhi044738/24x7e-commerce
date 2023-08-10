import axios from "axios";

export const getCategories = (getCategories) => {
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/categories");
      getCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
};
