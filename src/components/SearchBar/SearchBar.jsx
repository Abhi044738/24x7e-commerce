import { useState } from "react";
import { useProduct } from "../../context/productContext";
import { useFilter } from "../../context/FlterContext";
export const SearchBar = () => {
  const { product } = useProduct();
  const [SearchValue, setSearchValue] = useState("");
  const [displaySearch, setDisplaySearch] = useState([]);
  const { filterDispatch } = useFilter();
  const handleSearch = (event) => {
    if (event.target.value !== undefined) {
      setSearchValue(event.target.value);
      const searchList =
        event.target.value !== undefined && event.target.value !== ""
          ? product.reduce(
              (acc, curr) => {
                const returnItem = curr.title
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase())
                  ? [...acc, curr.title]
                  : [...acc];

                return returnItem;
              },

              []
            )
          : [];
      setDisplaySearch(searchList);
      setTimeout(() => setDisplaySearch([]), 3000);
    }
  };
  const onSearchhandler = (item) => {
    console.log(1, "          ", item);
    filterDispatch({ type: "ByName", payload: item });
  };
  return (
    <div>
      <input type="search" onChange={handleSearch}></input>
      <button onClick={() => onSearchhandler(SearchValue)}>Search</button>
      <div
        style={{
          color: "black",
          position: "absolute",
          border: displaySearch.length !== 0 ? "1px solid" : null,
        }}
      >
        {displaySearch?.map((item) => (
          <div
            style={{ borderBottom: "1px solid" }}
            onClick={() =>
              item !== undefined ? onSearchhandler(item) : () => {}
            }
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
