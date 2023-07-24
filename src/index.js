import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { CartWishListProvider } from "./context/CartWishlistContext";
import { ProductProvider } from "./context/productContext";
import { AuthProvider } from "./context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <CartWishListProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </CartWishListProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
