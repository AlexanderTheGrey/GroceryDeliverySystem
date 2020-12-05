import React from "react";
import { useStateValue } from "./StateProvider";

function header_Search() {
  const [{ cart, user }, dispatch] = useStateValue();

  const updateSearchTerm = event => {
      dispatch({
        type: "SEARCH",
        searchTerm: event.target.value
      });
    };

  return (
    <div className="header_search">
        <input className="header_searchInput" type="text" 
          placeholder = "Search"
          value = {searchTerm}
          onChange={updateSearchTerm}/>
        <SearchIcon className="header_searchIcon" />
      </div>
  );
}

export default header_Search;
