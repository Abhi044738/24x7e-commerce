import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { DataProvider } from "./context/context";
import { DataBaseProvider } from "./context/dataBaseContext";
import { AuthenticationProvider } from "./context/AuthenticationContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataBaseProvider>
        <DataProvider>
          <AuthenticationProvider>
            <App />
          </AuthenticationProvider>
        </DataProvider>
      </DataBaseProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
