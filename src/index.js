import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { DataProvider } from "./context/context";
import { ProductProvider } from "./context/productContext";
import { AuthenticationProvider } from "./context/AuthenticationContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <DataProvider>
          <AuthenticationProvider>
            <App />
          </AuthenticationProvider>
        </DataProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
