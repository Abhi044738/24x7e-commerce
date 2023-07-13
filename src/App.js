import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Home } from "./page/Home/Home";
import { Products } from "./page/Product/Product";
import { Cart } from "./page/Cart/Cart";
import { Wishlist } from "./page/Wishlist/Wishlist";
import { ProductDetails } from "./page/ProductDetails/ProductDetails";
import { Navigation } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const getProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/productsDetails" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
