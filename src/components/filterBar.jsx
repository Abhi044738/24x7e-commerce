import { useDataBase } from "../context/dataBaseContext";
export const FilterBar = () => {
  const { dataBase, setDataBase, categoriesData } = useDataBase();
  //   console.log(5, dataBase, categoriesData);

  const filterHandler = (event) => {
    /////filtercategories
    const newproduct = dataBase.reduce(
      (acc, curr) =>
        event.target.value === "All"
          ? [...acc, { ...curr, display: true }]
          : event.target.value.toLowerCase() !== curr.categoryName.toLowerCase()
          ? [...acc, { ...curr, display: false }]
          : [...acc, { ...curr, display: true }],
      []
    );
    console.log("here", newproduct);
    setDataBase(newproduct);
  };
  /////filter price
  const filterPrice = (event) => {
    console.log(event.target.value);
    const newproduct = dataBase.reduce(
      (acc, curr) =>
        event.target.value >= curr.price
          ? [...acc, { ...curr, display: true }]
          : [...acc, { ...curr, display: false }],
      []
    );
    // console.log(newproduct);
    setDataBase(newproduct);
  };

  return (
    <div className="items filters">
      <h3 className="filter-item">
        <label>
          categories
          <select onChange={filterHandler}>
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
              onClick={filterPrice}
              type="radio"
              name="filter"
              value={1000}
            />
            upto Rs 1000
          </label>
          <label>
            <input
              onClick={filterPrice}
              type="radio"
              name="filter"
              value={2000}
            />
            upto Rs 2000
          </label>
          <label>
            <input
              onClick={filterPrice}
              type="radio"
              name="filter"
              value={3000}
            />
            upto Rs 3000
          </label>
          <label>
            <input
              onClick={filterPrice}
              type="radio"
              name="filter"
              value={3500}
            />
            upto Rs 3500
          </label>
          <label>
            <input
              onClick={filterPrice}
              type="radio"
              name="filter"
              value={4000}
            />
            upto Rs 4000
          </label>
          <label>
            <input
              onClick={filterPrice}
              type="radio"
              name="filter"
              value={999999999}
            />
            More then 4000
          </label>
        </div>
      </div>
    </div>
  );
};
