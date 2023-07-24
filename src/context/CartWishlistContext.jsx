import { createContext, useContext, useState } from "react";

const CartWishlistContext = createContext(null);

const CartWishListProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);
  const [WishList, setWishList] = useState([]);

  return (
    <CartWishlistContext.Provider
      value={{ Cart, setCart, WishList, setWishList }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
};
const useCartWishlistContext = () => useContext(CartWishlistContext);

export { CartWishListProvider, useCartWishlistContext };
