import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer/wishlistReducer";

const wishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });
  return (
    <wishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { useWishlist, WishlistProvider };
