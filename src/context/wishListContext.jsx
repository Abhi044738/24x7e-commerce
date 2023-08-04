import { createContext, useContext, useReducer, useState } from "react";
import { wishlistReducer } from "../reducer/wishlistReducer";

const wishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });
  const [wishlist, setWishlist] = useState([]);
  return (
    <wishlistContext.Provider
      value={{ wishlist, setWishlist, wishlistState, wishlistDispatch }}
    >
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { useWishlist, WishlistProvider };
