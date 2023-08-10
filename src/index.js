import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";

import { ProductProvider } from "./context/productContext";
import { AuthProvider } from "./context/AuthContext";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/wishListContext";
import { FilterProvider } from "./context/FlterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            <FilterProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </FilterProvider>
          </WishlistProvider>
        </CartProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
