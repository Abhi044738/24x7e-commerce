import { useState } from "react";
import { useDataBase } from "../context/dataBaseContext";
export const SearchBar = () => {
  const { dataBase, setDataBase } = useDataBase();
  const [SearchValue, setSearchValue] = useState("");
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };
  const onSearchhandler = () => {
    console.log(1, SearchValue);
    const newDataBase = dataBase.reduce(
      (acc, curr) =>
        curr.title.toLowerCase() !== SearchValue.toLowerCase()
          ? [...acc, { curr, display: false }]
          : [...acc, curr],
      []
    );
    setDataBase(newDataBase);
  };
  return (
    <div>
      <input type="search" onChange={handleSearch}></input>
      <button onClick={onSearchhandler}>Search</button>
    </div>
  );
};
