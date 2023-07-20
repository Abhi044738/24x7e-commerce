import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const dataBaseContext = createContext(null);

const DataBaseProvider = ({ children }) => {
  const [dataBase, setDataBase] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  const gettingData = async () => {
    try {
      const response = await axios.get("/api/products");
      setDataBase(response.data.products);
      const response2 = await axios.get("/api/categories");
      setCategoriesData(response2.data.categories);

      // console.log("1", dataBase, response.data.products);
      // console.log("2", categoriesData, response2.data.categories);
    } catch (error) {
      // console.error(error);
    }
  };
  useEffect(() => gettingData(), []);

  return (
    <dataBaseContext.Provider
      value={{
        dataBase,
        setDataBase,
        categoriesData,
        setCategoriesData,
      }}
    >
      {children}
    </dataBaseContext.Provider>
  );
};

const useDataBase = () => useContext(dataBaseContext);
export { useDataBase, DataBaseProvider };
