import "../style.css";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { ProductCard } from "./component/ProductCard";
import { useState } from "react";
import { getProduct } from "../../utils/productHandler/getProduct";

export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => setProducts(() => getProduct()), []);
  return (
    <div className="layout">
      <FilterBar />
      <div className="items product-content ">
        <ProductCard />
      </div>
    </div>
  );
};
