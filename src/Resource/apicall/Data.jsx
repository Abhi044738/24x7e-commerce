import axios from "axios";
import { createContext, useContext, useState } from "react";
let userData;
export const getData = () => {
  const gettingData = async () => {
    try {
      const response = await axios.get("/api/products");
      userData = response.data.products;
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };
  gettingData();
  return userData;
};
export { userData };
