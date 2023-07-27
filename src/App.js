import "./App.css";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { Home } from "./page/Home/Home";
import { Products } from "./page/Product/Product";
import { Cart } from "./page/Cart/Cart";
import { Wishlist } from "./page/Wishlist/Wishlist";
import { ProductDetails } from "./page/ProductDetails/ProductDetails";

import { LogInPage } from "./page/loginpage/LoginPage/LoginPage";
import { SignUpPage } from "./page/loginpage/SignupPage/SignUpPage";
import { RequiresAuth } from "./RequiresAuth";
import { Navigation } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/productsDetails" element={<ProductDetails />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signUpPage" element={<SignUpPage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
