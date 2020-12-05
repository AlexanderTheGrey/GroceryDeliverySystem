import React from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function Search() {
  const [{ searchTerm }, dispatch] = useStateValue();
  let currSearch = searchTerm;
  return (
    <div className="search">
      {currSearch}
    </div>
  );
}

export default Search;
