import { createContext, useContext, useReducer, useState } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] });
  const [Cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ Cart, setCart, cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
