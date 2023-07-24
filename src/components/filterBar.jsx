import { useState } from "react";
import { useProduct } from "../context/productContext";
export const FilterBar = () => {
  const { product, setProduct, categoriesData } = useProduct();
  const [categorySelected, setCategorySelected] = useState("All");
  const [priceSelected, setPriceSelected] = useState(9999999);
  const filterPrice1 = () => {
    const newproduct = product.reduce(
      (acc, curr) =>
        priceSelected >= curr.price
          ? [...acc, { ...curr, display: true }]
          : [...acc, { ...curr, display: false }],
      []
    );
    return newproduct;
  };

  const filtercategories2 = () => {
    const newproduct = product.reduce(
      (acc, curr) =>
        categorySelected === "All"
          ? [...acc, { ...curr, display: true }]
          : categorySelected.toLowerCase() !== curr.categoryName.toLowerCase()
          ? [...acc, { ...curr, display: false }]
          : [...acc, { ...curr, display: true }],
      []
    );

    return newproduct;
  };

  const handleCategorySelected = (event) => {
    setCategorySelected(event.target.value);
  };
  const handlePriceSelected = (event) => {
    setPriceSelected(event.target.value);
  };
  const handleFilter = () => {
    const priceArray = filterPrice1();
    const categoryArray = filtercategories2();
    const newProductArray = product.reduce(
      (acc, curr) =>
        categoryArray.find(
          (item) =>
            item.categoryName === curr.categoryName && item.display === true
        ) &&
        priceArray.find(
          (item2) => item2.price === curr.price && item2.display === true
        )
          ? [...acc, { ...curr, display: true }]
          : [...acc, { ...curr, display: false }],
      []
    );
    setProduct(newProductArray);
  };
  /////////////////////////////////////////
  return (
    <div className="items filters">
      <h3 className="filter-item">
        <label>
          categories
          <select onChange={handleCategorySelected}>
            <option value={"All"}>All</option>
            {categoriesData.map((item) => (
              <option value={item.categoryName}>{item.categoryName}</option>
            ))}
          </select>
        </label>
      </h3>

      <div>
        <h3>Price</h3>
        <div className="filter-item filters">
          <label>
            <input
              onClick={handlePriceSelected}
              type="radio"
              name="filter"
              value={1000}
            />
            upto Rs 1000
          </label>
          <label>
            <input
              onClick={handlePriceSelected}
              type="radio"
              name="filter"
              value={2000}
            />
            upto Rs 2000
          </label>
          <label>
            <input
              onClick={handlePriceSelected}
              type="radio"
              name="filter"
              value={3000}
            />
            upto Rs 3000
          </label>
          <label>
            <input
              onClick={handlePriceSelected}
              type="radio"
              name="filter"
              value={3500}
            />
            upto Rs 3500
          </label>
          <label>
            <input
              onClick={handlePriceSelected}
              type="radio"
              name="filter"
              value={4000}
            />
            upto Rs 4000
          </label>
          <label>
            <input
              onClick={handlePriceSelected}
              type="radio"
              name="filter"
              value={999999999}
            />
            More then 4000
          </label>
          <br />
          <button onClick={handleFilter}>
            <h3>Filter</h3>
          </button>
        </div>
      </div>
    </div>
  );
};
