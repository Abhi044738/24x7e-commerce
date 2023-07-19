import { createContext, useContext, useState } from "react";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);
  const [WishList, setWishList] = useState([]);

  return (
    <DataContext.Provider value={{ Cart, setCart, WishList, setWishList }}>
      {children}
    </DataContext.Provider>
  );
};
const useCartWishlistContext = () => useContext(DataContext);

export { DataProvider, useCartWishlistContext };
