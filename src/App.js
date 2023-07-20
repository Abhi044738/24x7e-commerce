import { useEffect } from "react";

import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Home } from "./page/Home/Home";
import { Products } from "./page/Product/Product";
import { Cart } from "./page/Cart/Cart";
import { Wishlist } from "./page/Wishlist/Wishlist";
import { ProductDetails } from "./page/ProductDetails/ProductDetails";
import { Navigation } from "./components/Header";
import { Footer } from "./components/Footer";
import { getData } from "./Resource/apicall/Data";

import { useAuthenticationContext } from "./context/AuthenticationContext";
import { LoginPage } from "./page/loginpage/sinup";
import { LogInSignUnPage } from "./page/loginpage/logInSignUnPage";

function App() {
  const { Login, RequiredAuth } = useAuthenticationContext();
  // const login = false;
  // const getProducts = async () => {
  //   try {
  //     const response = await axios.get("/api/products");
  //     console.log(response);
  //     const productData = response;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/cart"
          element={
            <RequiredAuth>
              <Cart />
            </RequiredAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiredAuth>
              <Wishlist />
            </RequiredAuth>
          }
        />
        <Route path="/productsDetails" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/LogInSignUnPage" element={<LogInSignUnPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
