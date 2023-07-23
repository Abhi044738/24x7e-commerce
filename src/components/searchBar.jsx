import { useState } from "react";
import { useProduct } from "../context/productContext";
export const SearchBar = () => {
  const { product, setProduct } = useProduct();
  const [SearchValue, setSearchValue] = useState("");
  const [displaySearch, setDisplaySearch] = useState([]);
  const handleSearch = (event) => {
    if (event.target.value !== undefined) {
      setSearchValue(event.target.value);
      console.log(3, event.target.value);
      console.log(
        event.target.value !== undefined && event.target.value !== ""
      );
      const searchList =
        event.target.value !== undefined && event.target.value !== ""
          ? product.reduce(
              (acc, curr) => {
                console.log("xy");
                console.log("b", event.target.value.toLowerCase());
                console.log("a", curr);

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
      console.log(4, "earchList", searchList, SearchValue);
      setDisplaySearch(searchList);
      console.log(event.target.value, searchList);
      setTimeout(() => setDisplaySearch([]), 3000);
    }
  };
  const onSearchhandler = (item) => {
    console.log(1, item);
    const newproduct =
      item !== ""
        ? product.reduce(
            (acc, curr) =>
              curr.title.toLowerCase() !== item.toLowerCase()
                ? [...acc, { ...curr, display: false }]
                : [...acc, { ...curr, dispaly: true }],
            []
          )
        : product;
    setProduct(newproduct);
    console.log(2, newproduct);
  };
  // const handler = (item) => {
  //   setSearchValue(item);
  //   onSearchhandler();
  // };
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
