import { useProduct } from "../../context/productContext";
import { useFilter } from "../../context/FlterContext";
export const FilterBar = () => {
  const { categoriesData } = useProduct();
  const { filterDispatch } = useFilter();

  const handleCategorySelected = (event) => {
    console.log(event.target.value);
    filterDispatch({ type: "ByCategories", payload: event.target.value });
  };
  const handlePriceSelected = (event) => {
    console.log(event.target.value);
    filterDispatch({ type: "ByPrice", payload: event.target.value });
  };
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
          {/* <button onClick={handleFilter}>
            <h3>Filter</h3>
          </button> */}
        </div>
      </div>
    </div>
  );
};
