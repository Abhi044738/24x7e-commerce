import "../style.css";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { ProductCard } from "./component/ProductCard";

export const Products = () => {
  return (
    <div className="layout">
      <FilterBar />
      <div className="items product-content ">
        <ProductCard />
      </div>
    </div>
  );
};
