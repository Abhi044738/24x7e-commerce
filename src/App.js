import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Home } from "./page/Home/Home";
import { Products } from "./page/Product/Product";
import { Cart } from "./page/Cart/Cart";
import { Wishlist } from "./page/Wishlist/Wishlist";
import { ProductDetails } from "./page/ProductDetails/ProductDetails";
import { Navigation } from "./components/Header";
import { Footer } from "./components/Footer";

import { LogInSignUnPage } from "./page/loginpage/logInSignUnPage";
import { LogInPage } from "./page/loginpage/logInPage";
import { SignUpPage } from "./page/loginpage/signUpPage";
import { RequiresAuth } from "./RequiresAuth";
function App() {
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
        <Route path="/LogInSignUnPage" element={<LogInSignUnPage />} /> */}
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signUpPage" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
